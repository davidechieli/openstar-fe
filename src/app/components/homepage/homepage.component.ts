import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrl: "./homepage.component.scss",
})
export class HomepageComponent {
	authEndpoint: any = "";

	constructor(
		public httpClient: HttpClient,
		public route: Router,
		private authService: AuthService
	) {}
	async ngOnInit(): Promise<void> {
		this.authEndpoint = await this.authService.getAuthorizationUri();
	}
	hideLandingPage(): boolean {
		// Check if the current route is '/openstar'
		return this.route.url !== "/openstar";
	}
}
