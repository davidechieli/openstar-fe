import { Component } from "@angular/core";

@Component({
	selector: "app-permissions",
	templateUrl: "./permissions.component.html",
	styleUrl: "./permissions.component.scss",
})
export class PermissionsComponent {
	permissionBreadcrumb = [
		{ label: "Home", link: "/openstar/my-identity-card" },
		{ label: "Permissions", link: "/openstar/permissions" },
	];
	toggleValue = false;
}
