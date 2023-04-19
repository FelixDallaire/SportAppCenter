import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CenterComponent } from './center/center.component';
import { BrochureComponent } from './brochure/brochure.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GuideGalleryComponent } from './guide-gallery/guide-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    NavigationBarComponent,
    CalendarComponent,
    CenterComponent,
    BrochureComponent,
    GuideGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
