import { Component } from '@angular/core';
import { faTableTennisPaddleBall, faRunning } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-guide-gallery',
  templateUrl: './guide-gallery.component.html',
  styleUrls: ['./guide-gallery.component.scss']
})
export class GuideGalleryComponent {
  selectedGuide: string = '';
  showContainer: boolean = true;

  faTableTennisPaddleBall = faTableTennisPaddleBall;
  faRunning = faRunning;

  updateShowGallery() {
    this.showContainer = true;
    this.selectedGuide = "";
  }

}
