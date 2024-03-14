import { Component, Input, OnInit } from "@angular/core";
import { SafeUrl } from "@angular/platform-browser";
import { IEnvironment, environment } from "../../environments/environment";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	env: IEnvironment;
	constructor() {
		this.env = environment;
	}
	@Input() authEndpoint!: string;
	serializeParams(params: any): SafeUrl {
		const queryString = Object.keys(params)
			.map((key) => key + "=" + params[key])
			.join("&");
		return queryString;
	}
}
