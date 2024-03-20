import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IEnvironment, environment } from "../environments/environment";
import { firstValueFrom } from "rxjs";
import { Router } from "@angular/router";
import { IMetadata } from "./idp-metadata";
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
		this.getAccessToken();
	}
	async getMetadata(): Promise<IMetadata> {
		debugger;
		const cachedMetadata = localStorage.getItem("metadata");

		if (cachedMetadata) return JSON.parse(cachedMetadata);
		const metadata = await firstValueFrom(
			this.httpClient.get<IMetadata>(environment.authorityUrl)
		);
		localStorage.setItem("metadata", JSON.stringify(metadata));
		return metadata;
	}
	async getAuthorizationUri(): Promise<string> {
		return (await this.getMetadata()).authorization_endpoint;
	}

	login(responseAuth: any): void {
		this.accessToken = responseAuth.access_token;
		this.refreshToken = responseAuth.refresh_token;
		this.idToken = responseAuth.id_token;
	}

	async getLogoutEndpoint(): Promise<string> {
		return (await this.getMetadata()).end_session_endpoint;
	}

	isLoggedIn(): boolean {
		// Verify if there is a valid access token
		return !!this.accessToken;
	}

	getAccessToken(): string {
		if (!this.accessToken) {
			this.accessToken = this.getNewToken();
		} else {
			const payload = JSON.parse(
				atob(this.accessToken.split(".")[1].toString())
			);

			const exp = new Date(payload.exp);
			if (new Date() > exp) {
				this.accessToken = this.getNewToken();
			}
		}
		return this.accessToken ?? "";
	}
	//per il refresh
	getNewToken(): string {
		return "";
	}
	async getTokenEndpoint() {
		return (await this.getMetadata()).token_endpoint;
	}
	async exchangeCodeWithToken(code: string) {
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
			.post<any>(await this.getTokenEndpoint(), body.toString(), {
				headers: headers,
			})
			.subscribe((res) => {
				this.login(res);

				this.router.navigate(["/openstar/my-identity-card"]);
			});
	}
}
