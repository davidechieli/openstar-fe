import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IEnvironment, environment } from "../environments/environment";
import { Observable, firstValueFrom, map } from "rxjs";
import { Router } from "@angular/router";
import { MemoizedFunction, memoize } from "lodash";
@Injectable({
	providedIn: "root",
})
export class AuthService {
	authorizationEndpoint?: string;
	private accessToken: string | null = null;
	refreshToken: string | null = null;
	tokenEndpoint!: string;
	idToken: string | null = null;
	env: IEnvironment;
	constructor(public httpClient: HttpClient, private router: Router) {
		this.env = environment;
	}

	async getAuthorizationUri(): Promise<string> {
		debugger;
		if (!this.authorizationEndpoint) {
			this.authorizationEndpoint = await this.getDirectAuthorizationUri();
		}

		return this.authorizationEndpoint;
	}
	async getDirectAuthorizationUri(): Promise<string> {
		const result = await firstValueFrom(
			this.httpClient
				.get<{ authorization_endpoint: string }>(environment.authorityUrl)
				.pipe(map((res) => res.authorization_endpoint))
		);
		return result;
	}
	login(responseAuth: any): void {
		this.accessToken = responseAuth.access_token;
		this.refreshToken = responseAuth.refresh_token;
		this.idToken = responseAuth.id_token;
	}

	getLogoutEndpoint(): Observable<{ end_session_endpoint: string }> {
		return this.httpClient.get<{ end_session_endpoint: string }>(
			environment.authorityUrl
		);
	}

	isLoggedIn(): boolean {
		// Verify if there is a valid access token
		return !!this.accessToken;
	}

	getAccessToken(): string {
		const payload = JSON.parse(
			atob(this.accessToken!.split(".")[1].toString())
		);
		const exp = new Date(payload.exp);
		if (new Date() > exp) {
			this.accessToken = this.getNewToken();
		}

		return this.accessToken ?? "";
	}
	//per il refresh
	getNewToken(): string {
		return "";
	}
	exchangeCodeWithToken(code: string) {
		this.httpClient.get<any>(this.env.authorityUrl).subscribe((res) => {
			console.log(res);
			this.tokenEndpoint = res.token_endpoint;
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
			this.httpClient
				.post<any>(this.tokenEndpoint, body.toString(), { headers: headers })
				.subscribe((res) => {
					this.login(res);

					this.router.navigate(["/openstar"]);
				});
		});
	}
}
