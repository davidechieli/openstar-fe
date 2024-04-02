import { Component } from "@angular/core";

@Component({
	selector: "app-my-esg-identity",
	templateUrl: "./my-esg-identity.component.html",
	styleUrl: "./my-esg-identity.component.scss",
})
export class MyEsgIdentityComponent {
	esgBreadcrumb = [
		{ label: "Home", link: "/openstar/my-identity-card" },
		{ label: "My ESG Identity", link: "/openstar/my-esg-identity" },
	];
}
