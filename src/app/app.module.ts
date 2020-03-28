import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSearchboxComponent } from './header/header-searchbox/header-searchbox.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseListComponent } from './browse/browse-list/browse-list.component';
import { BrowseItemComponent } from './browse/browse-item/browse-item.component';
import { ViewsPipe } from './pipes/views.pipe';
import { WatcherComponent } from './watcher/watcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchboxComponent,
    SidebarComponent,
    BrowseComponent,
    BrowseListComponent,
    BrowseItemComponent,
    ViewsPipe,
    WatcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
