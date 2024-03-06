import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MyEsgCommitmentComponent } from './components/my-esg-commitment/my-esg-commitment.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { ExploreMoreComponent } from './components/explore-more/explore-more.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, HeaderComponent, MyEsgCommitmentComponent, PermissionsComponent, ExploreMoreComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, NgbModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
