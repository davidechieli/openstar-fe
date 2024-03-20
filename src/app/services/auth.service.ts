import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IEnvironment, environment } from "../environments/environment";
import { map, Observable, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { CodeResponse, IMetadata, TokenResponse } from "./idp-metadata";
import { SafeUrl } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class AuthService {
	authorizationEndpoint?: string;
	private accessToken: string | null = null;
	refreshToken: string | null = null;
	tokenEndpoint!: string;
	idToken: string | null = null;
	env: IEnvironment;

	constructor(
		public httpClient: HttpClient,
		private router: Router,
		@Inject(DOCUMENT) private document: Document
	) {
		this.env = environment;
	}

	getMetadata(): Observable<IMetadata> {
		const cachedMetadata = localStorage.getItem("metadata");
		if (cachedMetadata) return of(JSON.parse(cachedMetadata ?? ""));

		return this.httpClient.get<IMetadata>(this.env.authorityUrl).pipe(
			map((metadata) => {
				localStorage.setItem("metadata", JSON.stringify(metadata));
				return metadata;
			})
		);
	}

	getAuthorizationUri(): Observable<string> {
		return this.getMetadata().pipe(
			map((metadata: IMetadata) => metadata.authorization_endpoint)
		);
	}

	login(responseAuth: TokenResponse): void {
		this.accessToken = responseAuth.access_token;
		this.refreshToken = responseAuth.refresh_token;
		this.idToken = responseAuth.id_token;
	}

	getLoginUrl(): Observable<string> {
		return this.getAuthorizationUri().pipe(
			map((authUri) => {
				console.log(authUri);
				return (
					authUri +
					"?" +
					this.serializeParams({
						response_type: "code",
						client_id: this.env.client_id,
						redirect_uri: this.env.redirect_uri,
						scope: this.env.scope,
					})
				);
			})
		);
	}

	getLogoutUrl(): Observable<string> {
		return this.getLogoutEndpoint().pipe(
			map((authUri) => {
				return (
					authUri +
					"?" +
					this.serializeParams({
						post_logout_redirect_uri: this.env.redirect_logout_uri,
						id_token_hint: this.idToken,
					})
				);
			})
		);
	}

	private serializeParams(params: any): SafeUrl {
		const queryString = Object.keys(params)
			.map((key) => key + "=" + params[key])
			.join("&");
		return queryString;
	}

	getLogoutEndpoint(): Observable<string> {
		return this.getMetadata().pipe(
			map((metadata) => metadata.end_session_endpoint)
		);
	}

	isLoggedIn(): Observable<boolean> {
		// Verify if there is a valid access token
		return this.getAccessToken(false).pipe(map((token) => token != ""));
	}

	getAccessToken(redirect: boolean = true): Observable<string> {
		if (!this.accessToken) {
			this.getLoginUrl().subscribe((loginUrl) => {
				if (redirect) this.document.location.href = loginUrl;
			});
		} else {
			const payload = JSON.parse(
				atob(this.accessToken.split(".")[1].toString())
			);

			const exp = new Date(payload.exp * 1000);
			if (new Date() > exp) {
				return this.getNewToken();
			}
		}

		return of(this.accessToken ?? "");
	}

	getNewToken(): Observable<string> {
		let body = new URLSearchParams();
		body.set("client_id", this.env.client_id);
		body.set("client_secret", this.env.client_secret);
		body.set("grant_type", "refresh_token");
		body.set("refresh_token", this.refreshToken!);

		const headers = new HttpHeaders().set(
			"Content-Type",
			"application/x-www-form-urlencoded"
		);

		return this.getTokenEndpoint().pipe(
			switchMap((tokenEndpoint) => {
				return this.httpClient
					.post<TokenResponse>(tokenEndpoint, body.toString(), {
						headers: headers,
					})
					.pipe(
						tap((res) => this.login(res)),
						map((res) => res.access_token)
					);
			})
		);
	}

	getTokenEndpoint(): Observable<string> {
		return this.getMetadata().pipe(map((metadata) => metadata.token_endpoint));
	}

	exchangeCodeWithToken(code: string): Observable<TokenResponse> {
		let body = new URLSearchParams();
		body.set("client_id", this.env.client_id);
		body.set("client_secret", this.env.client_secret);
		body.set("grant_type", "authorization_code");
		body.set("code", code);
		body.set("redirect_uri", this.env.redirect_uri);

		const headers = new HttpHeaders().set(
			"Content-Type",
			"application/x-www-form-urlencoded"
		);

		return this.getTokenEndpoint().pipe(
			switchMap((tokenEndpoint) => {
				return this.httpClient
					.post<TokenResponse>(tokenEndpoint, body.toString(), {
						headers: headers,
					})
					.pipe(tap((res) => this.login(res)));
			})
		);
	}
}
