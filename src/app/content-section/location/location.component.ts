import { Component } from '@angular/core';
import { PageState } from '../../app.module';
import { WindowSizes } from '../../redux/window-size';
import { Store } from '@ngrx/store';
import { NavigateContentAction, ContentPages } from '../../redux/active-content';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent {
    windowSize: WindowSizes;

    constructor(private store: Store<PageState>) {
        store.subscribe(pageState => this.windowSize = pageState.windowSize);
    }

    displayMode() {
        if (this.windowSize === WindowSizes.Mobile)
            return 'mobile';
        else
            return 'desktop';
    }

    selectJobBoard() {
        this.store.dispatch(new NavigateContentAction(ContentPages.jobBoard));
    }

    selectMarket() {
        this.store.dispatch(new NavigateContentAction(ContentPages.market));
    }

    selectTownHouse() {
        this.store.dispatch(new NavigateContentAction(ContentPages.townHouse));
    }
}
