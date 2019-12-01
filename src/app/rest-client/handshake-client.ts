import { HttpParams } from '@angular/common/http';
import { CreateSessionAction, UpdatePlayerAction, UpdateDailyJobAction } from '../redux/login';
import { PlayerCharacter } from '../model/player-character';
import { RestClient } from './abstract-client';

export class Handshake extends RestClient{
    
    requestNewSession(username: string, password: string) {
        this.http.get(this.serverUrl + 'requestSessionKey', { params: new HttpParams().set('username', username) }).subscribe((sessionKey: string) => {
            this.store.dispatch(new CreateSessionAction(sessionKey, password, username))
            this.authenticateUser();
        });
    }

    private authenticateUser() {
        this.authenticateAndSendRequest('authenticateUser', new HttpParams(), (loginPackage: LoginPackage) => {
            if (loginPackage.success) {
                this.store.dispatch(new UpdatePlayerAction(loginPackage.playerCharacter));
                this.store.dispatch(new UpdateDailyJobAction(loginPackage.dailyJob));
            }
            else
                console.log('TODO: Failed login');
        });
    }
}

class LoginPackage {
    success: boolean;
    playerCharacter: PlayerCharacter;
    dailyJob: string;
}
