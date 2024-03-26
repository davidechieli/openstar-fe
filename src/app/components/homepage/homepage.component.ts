import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PermissionService } from "../../services/permission.service";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrl: "./homepage.component.scss",
})
export class HomepageComponent {
	isPermissions: boolean = false;
	constructor(
		public router: Router,
		public route: ActivatedRoute,
		private permissionsService: PermissionService
	) {
		this.permissionsService.isPermissions$.subscribe((isPermissions) => {
			this.isPermissions = isPermissions;
		});
	}

	hideLandingPage(): boolean {
		// Check if the current route is '/openstar'
		return this.router.url !== "/openstar";
	}
}
