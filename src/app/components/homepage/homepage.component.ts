import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { AuthService } from "../../services/auth.service";
import { Observable } from "rxjs";

@Component({
	selector: "app-homepage",
	templateUrl: "./homepage.component.html",
	styleUrl: "./homepage.component.scss",
})
export class HomepageComponent {
	constructor(public route: Router) {}

	hideLandingPage(): boolean {
		// Check if the current route is '/openstar'
		return this.route.url !== "/openstar";
	}
}
