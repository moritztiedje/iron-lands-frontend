import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../app.module';
import { WindowSizes } from '../../redux/window-size';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  windowSize: WindowSizes;

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.windowSize = pageState.windowSize);
  }

  videoSize() {
    if (this.windowSize === WindowSizes.Large)
      return 'large';
    else if (this.windowSize === WindowSizes.Medium)
      return 'medium';
    else
      return 'fullscreen';
  }

}
