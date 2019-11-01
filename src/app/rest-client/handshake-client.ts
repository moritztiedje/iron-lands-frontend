import { HttpParams } from '@angular/common/http';
import { CreateSessionAction, UpdatePlayerAction } from '../redux/login';
import { PlayerCharacter } from '../model/player-character';
import { RestClient } from './abstract-client';

export class Handshake extends RestClient{
    private username: string;

    requestNewSession(username: string, password: string) {
        this.username = username;

        this.http.get(this.serverUrl + 'requestSessionKey').subscribe((sessionKey: string) => {
            this.store.dispatch(new CreateSessionAction(sessionKey, password))
            this.authenticateUser();
        });
    }

    private authenticateUser() {
        let authenticationParams = new HttpParams().set('username', this.username).set('hmac', this.hmac(this.username))

        this.http.get(this.serverUrl + 'authenticateUser', { params: authenticationParams }).subscribe((loginPackage: LoginPackage) => {
            console.log(loginPackage);
            if (loginPackage.success) {
                console.log(loginPackage);
                this.store.dispatch(new UpdatePlayerAction(loginPackage.playerCharacter));
            }
            else
                console.log('TODO: Failed login');
        });
    }
}

class LoginPackage {
    success: boolean;
    playerCharacter: PlayerCharacter;
}
