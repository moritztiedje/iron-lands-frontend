import { Component } from '@angular/core';
import { ClientsProvider } from '../rest-client/rest-client.module';

@Component({
    selector: 'app-login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent {
    username: string;
    password: string;

    constructor(private clientsProvider: ClientsProvider) {
    }

    onUsernameChange(username: string) {
        this.username = username;
    }

    onPasswordChange(password: string) {
        this.password = password;
    }

    login() {
        this.clientsProvider.getHandshakeClient().requestNewSession(this.username, this.password);
    }

}
