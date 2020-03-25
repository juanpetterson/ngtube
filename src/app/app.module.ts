import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchboxComponent } from './header/header-searchbox/header-searchbox.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseListComponent } from './browse/browse-list/browse-list.component';
import { BrowseItemComponent } from './browse/browse-item/browse-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchboxComponent,
    SidebarComponent,
    BrowseComponent,
    BrowseListComponent,
    BrowseItemComponent,
    LoadingSpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
