import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './feed/components/toolbar/toolbar.component';
import { SidenavComponent } from './feed/components/sidenav/sidenav.component';
import { TimelineComponent } from './feed/layout/timeline/timeline.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedTimeLineComponent } from './feed/components/feed-time-line/feed-time-line.component';
import { FeedExploreComponent } from './feed/components/feed-explore/feed-explore.component';
import { FeedNotificationsComponent } from './feed/components/feed-notifications/feed-notifications.component';
import { FeedMessagesComponent } from './feed/components/feed-messages/feed-messages.component';
import { MainComponent } from './feed/layout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    SidenavComponent,
    TimelineComponent,
    PageNotFoundComponent,
    FeedTimeLineComponent,
    FeedExploreComponent,
    FeedNotificationsComponent,
    FeedMessagesComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
