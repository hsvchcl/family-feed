import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedExploreComponent } from './feed/components/feed-explore/feed-explore.component';
import { FeedMessagesComponent } from './feed/components/feed-messages/feed-messages.component';
import { FeedNotificationsComponent } from './feed/components/feed-notifications/feed-notifications.component';
import { FeedTimeLineComponent } from './feed/components/feed-time-line/feed-time-line.component';
import { MainComponent } from './feed/layout/main/main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'access', component: LoginComponent },
  {
    path: 'feed',
    component: MainComponent,
    children: [
      { path: 'time-line', component: FeedTimeLineComponent },
      { path: 'explore', component: FeedExploreComponent },
      { path: 'notifications', component: FeedNotificationsComponent },
      { path: 'messages', component: FeedMessagesComponent },
    ],
  },
  { path: '', redirectTo: '/access', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
