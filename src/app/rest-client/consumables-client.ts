import { HttpParams } from '@angular/common/http';
import { PlayerCharacter } from '../model/player-character';
import { RestClient } from './abstract-client';
import { UpdatePlayerAction } from '../redux/login';

export class ConsumableClient extends RestClient {

    eat(consumableId: number) {
        let requestParams = new HttpParams().set('id', consumableId.toString()).set('hmac', this.hmac(consumableId.toString()));

        this.http.get(this.serverUrl + 'eat', { params: requestParams }).subscribe((playerCharacter: PlayerCharacter) => {
            this.store.dispatch(new UpdatePlayerAction(playerCharacter));
        });
    }

}
