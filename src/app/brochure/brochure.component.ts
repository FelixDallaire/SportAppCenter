import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss']
})
export class BrochureComponent {
  @Input() pageWidth: number = 0;
  @Input() pageHeight: number = 0;
  @Input() page1ImageUrl: string = "";
  @Input() page2ImageUrl: string = "";

  @Output() onDestroy: EventEmitter<void> = new EventEmitter();

  isDestroyed = false;
  isClosed = false;

  ngOnDestroy() {
    console.log('BrochureComponent destroyed');
  }

  onDestroyClick(): void {
    this.isClosed = true;

    setTimeout(() => {
      console.log('1 second has passed.');
      this.isDestroyed = true;
      this.onDestroy.emit();
    }, 1000);
  }
}
