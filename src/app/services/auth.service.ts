import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private accessToken: string | null = null;
	refreshToken: string | null = null;
	idToken: string | null = null;
	constructor(public httpClient: HttpClient) {}

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

	getAccessToken(): string | undefined | null {
		const payload = JSON.parse(
			atob(this.accessToken!.split(".")[1].toString())
		);
		const exp = new Date(payload.exp);
		if (new Date() > exp) {
			this.accessToken = this.getNewToken();
		}

		return this.accessToken;
	}

	getNewToken(): string {
		return "";
	}
}
