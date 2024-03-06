import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreMoreComponent } from './components/explore-more/explore-more.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyEsgCommitmentComponent } from './components/my-esg-commitment/my-esg-commitment.component';
import { PermissionsComponent } from './components/permissions/permissions.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      { path: 'my-esg-commitments', component: MyEsgCommitmentComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'explore-more', component: ExploreMoreComponent },
      { path: '', redirectTo: 'homepage', pathMatch: 'full' }, // Default route
    ],
  },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }, // Redirect to home by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
