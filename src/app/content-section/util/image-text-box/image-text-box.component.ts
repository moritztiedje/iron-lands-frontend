import { Component, Input } from '@angular/core';
import { WindowSizes } from '../../../redux/window-size';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';

@Component({
  selector: 'app-image-text-box',
  templateUrl: './image-text-box.component.html',
  styleUrls: ['./image-text-box.component.scss']
})
export class ImageTextBoxComponent {
  @Input() image: string;
  @Input() imagefirst: boolean = false;
  @Input() imagewidth: string = 'wide-image';

  windowSize: WindowSizes;

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.windowSize = pageState.windowSize);
  }

  getWindowSize() {
    if (this.windowSize === WindowSizes.Mobile)
      return 'mobile';
    else if (this.windowSize === WindowSizes.Medium)
      return 'desktop-medium';
    else
      return 'desktop-large';
  }
}
