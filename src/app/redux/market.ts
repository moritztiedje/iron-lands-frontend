import { Action } from '@ngrx/store';
import { MarketListing } from '../model/market';


export class UpdateMarketAction implements Action {
    constructor(public listings: Array<MarketListing>) { }

    type: string = 'NEW_LISTINGS';
}

export function marketReducer(listings: Array<MarketListing>, action: UpdateMarketAction): Array<MarketListing> {
    switch (action.type) {
        case 'NEW_LISTINGS':
            return action.listings;
        default:
            return listings;
    }
}
