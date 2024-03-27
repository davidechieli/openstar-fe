import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Observable } from "rxjs";
import { PermissionService } from "../../services/permission.service";
import { MatDialog } from "@angular/material/dialog";
import { PermissionModalComponent } from "../permission-modal/permission-modal.component";

@Component({
	selector: "app-permissions",
	templateUrl: "./permissions.component.html",
	styleUrl: "./permissions.component.scss",
})
export class PermissionsComponent implements OnInit {
	permissionBreadcrumb = [
		{ label: "Home", link: "/openstar/my-identity-card" },
		{ label: "Permissions", link: "/openstar/permissions" },
	];

	isChecked: boolean = false;
	toggleValue = false;
	companies = [
		{
			name: "Company A",
			sector: "Sector A",
			community: "Community A",
			public: "Allowed",
		},
		{
			name: "Company B",
			sector: "Sector B",
			community: "Community B",
			public: "Hidden",
		},
		{
			name: "Company C",
			sector: "Sector C",
			community: "Community A",
			public: "Allowed",
		},
		// Add more companies as needed
	];

	constructor(
		private apiService: ApiService,
		private route: Router,
		private permissionsService: PermissionService,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		const currentUrl = this.route.url;
		// Check if the URL contains '/permissions'
		if (currentUrl.includes("/permissions")) {
			this.permissionsService.setPermissions(true);
		} else {
			this.permissionsService.setPermissions(false);
		}
	}
	toggleSwitch() {
		const postData = {
			isChecked: this.isChecked,
		};

		this.apiService.postPublicFlag().subscribe();
	}

	openPermissionModal(companyVisibility: string) {
		const dialogRef = this.dialog.open(PermissionModalComponent, {
			width: "390px",
			height: "235px",
			data: {
				companyVisibility: companyVisibility,
			},
		});
	}
}
