import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatSlideToggleModule,
		MatDialogModule,
	],
	exports: [
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatSlideToggleModule,
	],
})
export class SharedModule {}
