import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { LoginAction } from '../redux/login';
import { Handshake } from '../rest-client/rest-client.module';

@Component({
    selector: 'app-login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
    username: string;
    password: string;

    constructor(private restClient: Handshake) {
    }

    ngOnInit() {
    }

    onUsernameChange(username: string) {
        this.username = username;
    }

    onPasswordChange(password: string) {
        this.password = password;
    }

    login() {
        this.restClient.requestNewSession(this.username, this.password);
    }

}