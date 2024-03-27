import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Observable } from "rxjs";
import { PermissionService } from "../../services/permission.service";
import { MatDialog } from "@angular/material/dialog";
import { PermissionModalComponent } from "../permission-modal/permission-modal.component";
import { CompanyCardModalComponent } from "../company-card-modal/company-card-modal.component";
@Component({
	selector: "app-explore-more",
	templateUrl: "./explore-more.component.html",
	styleUrl: "./explore-more.component.scss",
})
export class ExploreMoreComponent implements OnInit {
	exploreBreadcrumb = [
		{ label: "Home", link: "/openstar/my-identity-card" },
		{ label: "Explore more", link: "/openstar/explore-more" },
	];

	isChecked: boolean = false;
	toggleValue = false;
	companies = [
		{
			name: "Company A",
			sector: "Sector A",
			community: "Community A",
			lastUpdate: "20/03/2024",
			visibility: "Public",
		},
		{
			name: "Company B",
			sector: "Sector B",
			community: "Community B",
			lastUpdate: "20/03/2024",
			visibility: "Private",
		},
		{
			name: "Company C",
			sector: "Sector C",
			community: "Community A",
			lastUpdate: "20/03/2024",
			visibility: "Public",
		},
		{
			name: "Company D",
			sector: "Sector D",
			community: "Community A",
			lastUpdate: "20/03/2024",
			visibility: "Private",
		},
		{
			name: "Company E",
			sector: "Sector E",
			community: "Community B",
			lastUpdate: "20/03/2024",
			visibility: "Public",
		},
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
		if (currentUrl.includes("/explore-more")) {
			this.permissionsService.setPermissions(true);
		} else {
			this.permissionsService.setPermissions(false);
		}
	}

	openCardModal(companyData: any) {
		const dialogRef = this.dialog.open(CompanyCardModalComponent, {
			// width: "919px",
			// height: "494px",
			data: {
				companyData: companyData,
			},
		});
	}
}
