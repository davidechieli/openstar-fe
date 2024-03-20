import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
	isLogged: boolean = false;

	logoutUri: string | undefined;
	loginUri: string | undefined;
	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.isLoggedIn().subscribe((isLogged) => {
			this.isLogged = isLogged;
			if (isLogged)
				this.authService
					.getLogoutUrl()
					.subscribe((url) => (this.logoutUri = url));
			else
				this.authService
					.getLoginUrl()
					.subscribe((url) => (this.loginUri = url));
		});
	}
}
