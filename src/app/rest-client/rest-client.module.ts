import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { ConsumableClient } from './consumables-client';
import { Handshake } from './handshake-client';
import { ManagePropertiesClient } from './manage-properties-client';
import { MarketClient } from './market-client';
import { TravelClient } from './travel-client';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ]
})

export class RestClientModule {
}

@Injectable({
    providedIn: 'root'
})
export class ClientsProvider {
    
    private handshakeClient: Handshake;
    private consumablesClient: ConsumableClient;
    private marketClient: MarketClient;
    private travelClient: TravelClient;
    private managePropertiesClient: ManagePropertiesClient;

    constructor(private http: HttpClient, private store: Store<PageState>) {
        this.handshakeClient = new Handshake(http, store);
        this.consumablesClient = new ConsumableClient(http, store);
        this.marketClient = new MarketClient(http, store);
        this.travelClient = new TravelClient(http, store);
        this.managePropertiesClient = new ManagePropertiesClient(http, store);
    }

    public getHandshakeClient(): Handshake {
        return this.handshakeClient;
    }

    public getConsumablesClient(): ConsumableClient {
        return this.consumablesClient;
    }

    public getMarketClient(): MarketClient {
        return this.marketClient;
    }

    public getTravelClient(): TravelClient {
        return this.travelClient;
    }

    public getManagePropertiesClient(): ManagePropertiesClient {
        return this.managePropertiesClient;
    }

}
