import { Component, Input, OnInit } from "@angular/core";
import { SafeUrl } from "@angular/platform-browser";
import { IEnvironment, environment } from "../../environments/environment";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
	env: IEnvironment;
	isLogged: boolean = false;
	idToken: string | null;
	logoutEndpoint!: string;
	constructor(private authService: AuthService) {
		this.env = environment;
		authService.getLogoutEndpoint().subscribe((res) => {
			this.logoutEndpoint = res.end_session_endpoint;
		});
		this.idToken = authService.idToken;
	}
	@Input() authEndpoint!: string;
	serializeParams(params: any): SafeUrl {
		const queryString = Object.keys(params)
			.map((key) => key + "=" + params[key])
			.join("&");
		return queryString;
	}
	ngOnInit(): void {
		this.isLogged = this.authService.isLoggedIn();
	}
}
