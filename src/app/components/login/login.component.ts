import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
		private router: Router,
		private authService: AuthService
	) {}
	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			this.authService.exchangeCodeWithToken(params["code"]).subscribe(() => {
				this.router.navigate(["/openstar/my-identity-card"]);
			});
		});
	}
}
