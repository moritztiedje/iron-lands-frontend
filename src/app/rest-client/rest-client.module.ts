import { NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { Handshake } from './handshake-client';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


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

    constructor(private http: HttpClient, private store: Store<PageState>) {
        this.handshakeClient = new Handshake(http, store);
    }

    public getHandshakeClient(): Handshake {
        return this.handshakeClient;
    }

}
