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
    consumables = new Array();

    constructor(store: Store<PageState>, private clientsProvider: ClientsProvider) {
        store.subscribe(pageState => {
            this.marketListings = pageState.listings;
            this.consumables = pageState.session.playerCharacter.consumables;
        });
    }

    buy(id: number) {
        this.clientsProvider.getMarketClient().buy(id);
    }

    sell(id: number, price: number) {
        this.clientsProvider.getMarketClient().sellconsumable(id, price);
    }
}
