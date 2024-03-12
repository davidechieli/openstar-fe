import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./modules/shared/shared.module";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MyEsgIdentityComponent } from "./components/my-esg-commitment/my-esg-identity.component";
import { PermissionsComponent } from "./components/permissions/permissions.component";
import { ExploreMoreComponent } from "./components/explore-more/explore-more.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
@NgModule({
	declarations: [
		AppComponent,
		HomepageComponent,
		HeaderComponent,
		MyEsgIdentityComponent,
		PermissionsComponent,
		ExploreMoreComponent,
		SearchBarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		NgbModule,
		HttpClientModule,
	],
	providers: [provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
