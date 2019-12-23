import { Component } from '@angular/core';
import { PageState } from '../../app.module';
import { WindowSizes } from '../../redux/window-size';
import { Store } from '@ngrx/store';
import { NavigateContentAction, ContentPages } from '../../redux/active-content';
import { ClientsProvider } from '../../rest-client/rest-client.module';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent {
    windowSize: WindowSizes;

    constructor(private store: Store<PageState>, private clientsProvider: ClientsProvider) {
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
        this.clientsProvider.getMarketClient().requestMarketListings();
        this.store.dispatch(new NavigateContentAction(ContentPages.market));
    }

    selectTownHouse() {
        this.store.dispatch(new NavigateContentAction(ContentPages.townHouse));
    }

    selectTravel() {
        this.store.dispatch(new NavigateContentAction(ContentPages.travel));
    }

    selectManageProperties() {
        this.store.dispatch(new NavigateContentAction(ContentPages.manageProperties));
    }

}
