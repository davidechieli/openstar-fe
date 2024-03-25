import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, filter, map, of } from "rxjs";
import { environment } from "../environments/environment";
import { Endpoint } from "./endpoint.enum";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	token: string | undefined;

	constructor(
		private httpClient: HttpClient,
		private authService: AuthService
	) {
		this.authService.getAccessToken(false).subscribe((token) => {
			this.token = token;
		});
	}

	searchCompanies(): Observable<ICompanies[]> {
		return this.httpClient.get<ICompanies[]>(
			`${environment.apiUrl}${Endpoint.COMMUNITY}/1/company/list`
			//{ headers: headers }
		);
	}
	postPublicFlag(): Observable<string> {
		const headers: HttpHeaders = new HttpHeaders({
			Authorization: `Bearer ${this.token}`,
		});
		return this.httpClient.post<any>(
			`${environment.apiUrl}${Endpoint.COMMUNITY}/1/company/4/publicFlag`,
			null,
			{ headers: headers }
		);
	}
}

export interface ICompanies {
	ID_company: number;
	businessName: string;
	pIva: string;
	vat: string;
	duns: number;
	publicFlag: boolean;
}
