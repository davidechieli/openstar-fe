import { Component } from "@angular/core";
import { ApiService } from "../../services/api.service";

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

	isChecked: boolean = false;
	toggleValue = false;

	constructor(private apiService: ApiService) {}

	toggleSwitch() {
		const postData = {
			isChecked: this.isChecked,
		};

		this.apiService.postPublicFlag().subscribe();
	}
}
