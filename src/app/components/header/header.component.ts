import { Component, Input } from "@angular/core";
import { SafeUrl } from "@angular/platform-browser";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	@Input() authEndpoint!: string;
	serializeParams(params: any): SafeUrl {
		const queryString = Object.keys(params)
			.map((key) => key + "=" + params[key])
			.join("&");
		return queryString;
	}
}
