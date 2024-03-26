import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-upload-modal",
	templateUrl: "./upload-modal.component.html",
	styleUrl: "./upload-modal.component.scss",
})
export class UploadModalComponent {
	constructor(public dialogRef: MatDialogRef<UploadModalComponent>) {}

	onFileSelected(event: any) {
		const file: File = event.target.files[0];
		if (file) {
			// Handle the selected file
			this.handleFileUpload(file);
		}
	}
	openFileExplorer() {
		const fileInput = document.getElementById("fileInput");
		if (fileInput) fileInput.click();
	}
	onCancel(): void {
		this.dialogRef.close();
	}

	onConfirm(): void {
		// Implement your logic for confirming the upload
		console.log("Upload confirmed!");
		this.dialogRef.close();
	}

	onDragOver(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
	}

	onDragLeave(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
	}

	onDrop(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		//gestiire il caso di files null
		const files = event!.dataTransfer!.files;
		if (files.length > 0) {
			const file = files[0]; // Prendi solo il primo file, puoi gestire più file se necessario
			if (file.type === "application/json") {
				this.handleFileUpload(file);
			} else {
				alert("Please upload a JSON file.");
			}
		}
	}

	handleFileUpload(file: File) {
		const formData = new FormData();
		formData.append("file", file);

		//chiamata post per caricare il json
	}
}
