import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./modules/shared/shared.module";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MyEsgIdentityComponent } from "./components/my-esg-identity/my-esg-identity.component";
import { PermissionsComponent } from "./components/permissions/permissions.component";
import { ExploreMoreComponent } from "./components/explore-more/explore-more.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { LoginComponent } from "./components/login/login.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { FormsModule } from "@angular/forms";
import { PersonalPageComponent } from "./components/personal-page/personal-page.component";
import { IdentityCardComponent } from "./components/identity-card/identity-card.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { AuthService } from "./services/auth.service";
import { UploadModalComponent } from "./components/upload-modal/upload-modal.component";
@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		HeaderComponent,
		MyEsgIdentityComponent,
		PermissionsComponent,
		ExploreMoreComponent,
		SearchBarComponent,
		LoginComponent,
		LandingPageComponent,
		LogoutComponent,
		PersonalPageComponent,
		IdentityCardComponent,
		BreadcrumbComponent,
		UploadModalComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		NgbModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
		NgbDropdownModule,
	],
	providers: [provideAnimationsAsync(), AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}
