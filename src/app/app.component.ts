import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ComponentRef, ApplicationRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from './app.module';
import { WindowResizedAction, WindowSizes } from './redux/window-size';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    store: Store<PageState>;
    windowSize: WindowSizes;
    username: string;

    constructor(store: Store<PageState>) {
        store.dispatch(new WindowResizedAction(window.innerWidth, window.innerHeight));
        store.subscribe(pageState => this.windowSize = pageState.windowSize);
        store.subscribe(pageState => this.username = pageState.username);
        this.store = store;
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize(event?) {
        this.store.dispatch(new WindowResizedAction(window.innerWidth, window.innerHeight));
    }

    getDisplayModeClass() {
        if (this.windowSize === WindowSizes.Mobile)
            return 'mobile';
        else
            return 'desktop';
    }

    isLoggedIn() {
        return this.username != null && this.username != "";
    }

}
