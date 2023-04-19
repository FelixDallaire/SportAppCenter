import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent {
  @Input() width: number = 200;
  @Input() height: number = 200;
}
