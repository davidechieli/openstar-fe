import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-permission-modal",
	templateUrl: "./permission-modal.component.html",
	styleUrl: "./permission-modal.component.scss",
})
export class PermissionModalComponent {
	constructor(public dialogRef: MatDialogRef<PermissionModalComponent>) {}

	onCancel(): void {
		this.dialogRef.close();
	}

	onConfirm(): void {
		// Implement your logic for confirming the upload
		console.log("Upload confirmed!");
		this.dialogRef.close();
	}
}
