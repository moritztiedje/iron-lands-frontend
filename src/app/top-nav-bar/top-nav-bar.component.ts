import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { WindowSizes } from '../redux/window-size';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent {
  windowSize: WindowSizes;

  constructor(store: Store<PageState>) {
    store.subscribe(pageState => this.windowSize = pageState.windowSize);
  }

  isInDesktopMode() {
    return this.windowSize !== WindowSizes.Mobile;
  }

}
