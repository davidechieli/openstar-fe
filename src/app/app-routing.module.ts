import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExploreMoreComponent } from "./components/explore-more/explore-more.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { MyEsgIdentityComponent } from "./components/my-esg-commitment/my-esg-identity.component";
import { PermissionsComponent } from "./components/permissions/permissions.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
	{
		path: "openstar",
		component: HomepageComponent,
		children: [
			{ path: "my-esg-identity", component: MyEsgIdentityComponent },
			{ path: "permissions", component: PermissionsComponent },
			{ path: "explore-more", component: ExploreMoreComponent },
		],
	},
	{ path: "login", component: LoginComponent },
	{ path: "", redirectTo: "openstar", pathMatch: "full" }, // Redirect to home by default
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
