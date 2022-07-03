import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedExploreComponent } from './feed/components/feed-explore/feed-explore.component';
import { FeedMessagesComponent } from './feed/components/feed-messages/feed-messages.component';
import { FeedNotificationsComponent } from './feed/components/feed-notifications/feed-notifications.component';
import { FeedTimeLineComponent } from './feed/components/feed-time-line/feed-time-line.component';
import { TimelineComponent } from './feed/layout/timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'access', component: LoginComponent },
  {
    path: 'feed',
    component: TimelineComponent,
    children: [
      { path: 'feed-time-line', component: FeedTimeLineComponent },
      { path: 'feed-explore', component: FeedExploreComponent },
      { path: 'feed-notifications', component: FeedNotificationsComponent },
      { path: 'feed-messages', component: FeedMessagesComponent },
    ],
  },
  { path: '', redirectTo: '/access', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
