import { NgModule, Pipe, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { LoginAction } from '../redux/login';


@NgModule({
    declarations: [
    ],
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
export class Handshake {
    private username: string;
    private password: string;
    private sessionKey: string;

    constructor(private http: HttpClient, private store: Store<PageState>) {
    }

    requestNewSession(username: string, password: string) {
        this.username = username;
        this.password = password;

        this.http.get('http://localhost:8080/requestSessionKey').subscribe((sessionKey: string) => {
            this.sessionKey = sessionKey;
            this.authenticateUser();
        });
    }

    private authenticateUser() {
        let authenticationParams = new HttpParams().set('username', this.username).set('hmac', this.hmac(this.username))

        this.http.get('http://localhost:8080/authenticateUser', { params: authenticationParams }).subscribe((loginAttempt: LoginAttempt) => {
            console.log(loginAttempt);
            if (loginAttempt.success) {
                console.log("Login " + this.username);
                this.store.dispatch(new LoginAction(this.username));
            }
            else
                console.log('TODO: Failed login');
        });
    }

    private hmac(stringToHash: string): string {
        let completeString = stringToHash + this.sessionKey + this.password;
        let hash = 0;
        for (var i = 0; i < completeString.length; i++)
            hash = Math.imul(31, hash) + completeString.charCodeAt(i) | 0;
        return hash + "";
    }
}

class LoginAttempt {
    success: boolean;
    playerCharacter: PlayerCharacter;
}

class PlayerCharacter {
    agility: 10
    characterName: "Supa Boy"
    charisma: 10
    intelligence: 10
    strength: 10
    username: "harald"
}
