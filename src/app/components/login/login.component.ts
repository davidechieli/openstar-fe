import { Component, OnInit } from "@angular/core";
import {
	ActivatedRoute,
	NavigationExtras,
	Route,
	Router,
} from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IEnvironment, environment } from "../../environments/environment";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private authService: AuthService
	) {}
	ngOnInit(): void {
		this.route.queryParams.subscribe(async (params) => {
			await this.authService.exchangeCodeWithToken(params["code"]);
		});
	}
}
