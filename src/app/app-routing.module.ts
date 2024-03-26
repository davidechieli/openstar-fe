import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExploreMoreComponent } from "./components/explore-more/explore-more.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { MyEsgIdentityComponent } from "./components/my-esg-identity/my-esg-identity.component";
import { PermissionsComponent } from "./components/permissions/permissions.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { PersonalPageComponent } from "./components/personal-page/personal-page.component";

const routes: Routes = [
	{
		path: "openstar",
		component: HomepageComponent,
		children: [
			{ path: "my-esg-identity", component: MyEsgIdentityComponent },
			{ path: "permissions", component: PermissionsComponent },
			{ path: "explore-more", component: ExploreMoreComponent },
			{ path: "my-identity-card", component: PersonalPageComponent },
		],
	},
	{ path: "login", component: LoginComponent },
	{ path: "logout", component: LogoutComponent },
	{ path: "", redirectTo: "openstar", pathMatch: "full" }, // Redirect to home by default
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
