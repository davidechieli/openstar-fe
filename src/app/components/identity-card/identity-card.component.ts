import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UploadModalComponent } from "../upload-modal/upload-modal.component";

@Component({
	selector: "app-identity-card",
	templateUrl: "./identity-card.component.html",
	styleUrl: "./identity-card.component.scss",
})
export class IdentityCardComponent {
	years: number[] = [];
	currentYear: number;
	isFirstLogin: boolean = false;
	isPrivate: boolean = true;

	constructor(private router: Router, public dialog: MatDialog) {
		const startYear = 2021;
		this.currentYear = new Date().getFullYear();
		for (let year = startYear; year <= this.currentYear; year++) {
			this.years.push(year);
		}
		this.years.reverse();
	}

	redirectToESGIdentity() {
		this.router.navigate(["openstar", "my-esg-identity"]);
	}

	openUploadModal(): void {
		const dialogRef = this.dialog.open(UploadModalComponent, {
			width: "623px",
			height: "365px",
		});
	}
}
