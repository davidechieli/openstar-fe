import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-logout",
	templateUrl: "./logout.component.html",
	styleUrl: "./logout.component.scss",
})
export class LogoutComponent implements OnInit {
	constructor(private route: Router) {}
	ngOnInit(): void {
		localStorage.removeItem("metadata");
		this.route.navigate(["/openstar"]);
	}
}
