import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: BrowseComponent, pathMatch: 'full' },
  { path: 'feed/trending', component: BrowseComponent },
  { path: 'feed/subscriptions', component: BrowseComponent },
  { path: 'feed/library', component: BrowseComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
