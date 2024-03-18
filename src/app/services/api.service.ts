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
	constructor(
		private httpClient: HttpClient,
		private authService: AuthService
	) {}

	searchCompanies(searchQuery: string): Observable<ICompanies[]> {
		// const headers: HttpHeaders = new HttpHeaders({
		// 	Authorization: this.authService.getAccessToken(),
		// });
		return this.httpClient.get<ICompanies[]>(
			`${environment.apiUrl}${Endpoint.COMMUNITY}/1/company/company/list`
			//{ headers: headers }
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
