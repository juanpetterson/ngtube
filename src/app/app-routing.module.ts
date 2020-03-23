import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: BrowseComponent, pathMatch: 'full' },
  { path: 'trending', component: BrowseComponent, pathMatch: 'full' },
  { path: 'subscriptions', component: BrowseComponent },
  { path: 'library', component: BrowseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
