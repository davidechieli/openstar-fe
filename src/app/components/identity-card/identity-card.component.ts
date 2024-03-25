import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-identity-card",
	templateUrl: "./identity-card.component.html",
	styleUrl: "./identity-card.component.scss",
})
export class IdentityCardComponent {
	years: number[] = [];
	currentYear: number;

	constructor() {
		const startYear = 2021;
		this.currentYear = new Date().getFullYear();
		for (let year = startYear; year <= this.currentYear; year++) {
			this.years.push(year);
		}
		this.years.reverse();
	}
}
