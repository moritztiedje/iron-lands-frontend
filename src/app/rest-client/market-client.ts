import { HttpParams } from '@angular/common/http';
import { PlayerCharacter } from '../model/player-character';
import { RestClient } from './abstract-client';
import { UpdatePlayerAction } from '../redux/login';
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

}

class BuyResponse {
    success: boolean;
    playerCharacter: PlayerCharacter;
}
