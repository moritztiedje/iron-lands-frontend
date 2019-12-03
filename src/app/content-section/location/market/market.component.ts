import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';
import { ClientsProvider } from '../../../rest-client/rest-client.module';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
    marketListings = new Array();

    constructor(store: Store<PageState>, private clientsProvider: ClientsProvider) {
        store.subscribe(pageState => this.marketListings = pageState.listings);
    }

    buy(id: number) {
        this.clientsProvider.getMarketClient().buy(id);
    }
}
