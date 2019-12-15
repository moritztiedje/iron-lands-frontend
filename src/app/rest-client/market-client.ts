import { HttpParams } from '@angular/common/http';
import { PlayerCharacter, Consumable } from '../model/player-character';
import { RestClient } from './abstract-client';
import { UpdatePlayerAction, UpdateConsumablesAction, UpdateCopperAction } from '../redux/login';
import { MarketListing } from '../model/market';
import { UpdateMarketAction } from '../redux/market';

export class MarketClient extends RestClient {
    requestMarketListings() {
        this.authenticateAndSendRequest('requestMarketListings', new HttpParams(), (listings: Array<MarketListing>) => {
            this.store.dispatch(new UpdateMarketAction(listings));
        });
    }

    buy(listingId: number) {
        this.authenticateAndSendRequest('buy', new HttpParams().set('id', listingId.toString()), (response: BuyResponse) => {
            console.log(response);
            if (response.success) {
                this.store.dispatch(new UpdatePlayerAction(response.playerCharacter));
                this.requestMarketListings();
            } else {
                console.log("TODO: Failed to buy message");
            }
        });
    }

    sellconsumable(consumableId: number, price: number) {
        this.authenticateAndSendRequest('sellconsumable', new HttpParams().set('id', consumableId.toString()).set('price', price.toString()), (response: SellResponse) => {
            console.log(response);
            if (response.success) {
                this.store.dispatch(new UpdateConsumablesAction(response.consumables));
                this.requestMarketListings();
            } else {
                console.log("TODO: Failed to sell consumable message");
            }
        });
    }

}

class BuyResponse {
    success: boolean;
    playerCharacter: PlayerCharacter;
}

class SellResponse {
    success: boolean;
    consumables: Array<Consumable>;
}
