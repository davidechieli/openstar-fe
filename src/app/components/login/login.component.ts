import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IEnvironment, environment } from "../../environments/environment";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	env: IEnvironment;
	tokenEndpoint: string = ""; // Define authEndpoint here
	token: string = "";

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private authService: AuthService
	) {
		this.env = environment;
	}
	ngOnInit(): void {
		console.log("HELLO");
		this.route.queryParams.subscribe((params) => {
			this.exchangeCodeWithToken(params["code"]);
		});
	}
	exchangeCodeWithToken(code: string) {
		this.http.get<any>(this.env.authorityUrl).subscribe((res) => {
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
			this.http
				.post<any>(this.tokenEndpoint, body.toString(), { headers: headers })
				.subscribe((res) => {
					this.authService.token = res.access_token;
				});
		});
	}
}
