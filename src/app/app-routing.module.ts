import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CenterComponent } from './center/center.component';
import { BrochureComponent } from './brochure/brochure.component';
import { GuideGalleryComponent } from './guide-gallery/guide-gallery.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'nav', component: NavigationBarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'center', component: DashboardComponent},
  { path: 'schedule', component: DashboardComponent},
  { path: 'guide', component: DashboardComponent},
  { path: 'alert', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
