import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-permission-modal",
	templateUrl: "./permission-modal.component.html",
	styleUrl: "./permission-modal.component.scss",
})
export class PermissionModalComponent {
	visibility: string;
	constructor(
		public dialogRef: MatDialogRef<PermissionModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { companyVisibility: string }
	) {
		this.visibility = data.companyVisibility;
	}

	onCancel(): void {
		this.dialogRef.close();
	}

	onConfirm(): void {
		// Implement your logic for confirming the upload
		console.log("Upload confirmed!");
		this.dialogRef.close();
	}
}
