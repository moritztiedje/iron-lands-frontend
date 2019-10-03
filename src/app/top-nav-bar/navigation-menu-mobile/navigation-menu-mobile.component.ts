import { Component, OnInit, HostListener } from '@angular/core';
import { PageState } from '../../app.module';
import { Store } from '@ngrx/store';
import { DisableContentAction, EnableContentAction } from '../../redux/disabled-content';

@Component({
  selector: 'app-navigation-menu-mobile',
  templateUrl: './navigation-menu-mobile.component.html',
  styleUrls: ['./navigation-menu-mobile.component.scss']
})
export class NavigationMenuMobileComponent {

  flyoutMenuOpen = false;
  store: Store<PageState>;

  constructor(store: Store<PageState>) {
    this.store = store;
  }

  toggleMenu(event: Event) {
    this.flyoutMenuOpen = !this.flyoutMenuOpen;
    event.stopPropagation();
    this.updateContentDisabled();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event) {
    this.flyoutMenuOpen = false;
    this.updateContentDisabled();
  }

  updateContentDisabled() {
    if (this.flyoutMenuOpen)
      this.store.dispatch(new DisableContentAction());
    else
      this.store.dispatch(new EnableContentAction());
  }

}
