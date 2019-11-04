import { NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { Handshake } from './handshake-client';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ConsumableClient } from './consumables-client';
import { MarketClient } from './market-client';


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

    constructor(private http: HttpClient, private store: Store<PageState>) {
        this.handshakeClient = new Handshake(http, store);
        this.consumablesClient = new ConsumableClient(http, store);
        this.marketClient = new MarketClient(http, store);
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

}
