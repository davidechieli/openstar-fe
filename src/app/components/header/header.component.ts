import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { PermissionService } from "../../services/permission.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
	isLogged: boolean = false;

	logoutUri: string | undefined;
	loginUri: string | undefined;
	constructor(
		private authService: AuthService,
		private permissionsService: PermissionService
	) {}

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

	resetBg() {
		this.permissionsService.setPermissions(false);
	}
}
