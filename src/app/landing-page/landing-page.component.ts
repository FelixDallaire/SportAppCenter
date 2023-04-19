import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  featureImages = [
    '../../assets/images/feature-center.svg',
    '../../assets/images/feature-schedule.svg',
    '../../assets/images/feature-guide.svg',
    '../../assets/images/feature-alert.svg'
  ];
}