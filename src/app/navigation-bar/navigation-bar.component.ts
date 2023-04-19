import { Component } from '@angular/core';
import { faBuilding, faCalendar, faBookOpen, faBell, faCog} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  faBuilding = faBuilding;
  faCalendar = faCalendar;
  faBookOpen = faBookOpen;
  faBell = faBell;
  faCog = faCog;

}
