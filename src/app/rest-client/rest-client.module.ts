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
import { JobBoardClient } from './job-board-client';


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
 
    constructor(private http: HttpClient, private store: Store<PageState>) {
    }

    public getHandshakeClient(): Handshake {
        return new Handshake(this.http, this.store);
    }

    public getConsumablesClient(): ConsumableClient {
        return new ConsumableClient(this.http, this.store);
    }

    public getMarketClient(): MarketClient {
        return new MarketClient(this.http, this.store);
    }

    public getTravelClient(): TravelClient {
        return new TravelClient(this.http, this.store);
    }

    public getManagePropertiesClient(): ManagePropertiesClient {
        return new ManagePropertiesClient(this.http, this.store);
    }

    public getJobBoardClient(): JobBoardClient {
        return new JobBoardClient(this.http, this.store);
    }

}
