import { HttpParams } from '@angular/common/http';
import { PlayerCharacter } from '../model/player-character';
import { RestClient } from './abstract-client';
import { UpdatePlayerAction } from '../redux/login';

export class ConsumableClient extends RestClient {

    eat(consumableId: number) {
        this.authenticateAndSendRequest('eat', new HttpParams().set('id', consumableId.toString()), (playerCharacter: PlayerCharacter) => {
            this.store.dispatch(new UpdatePlayerAction(playerCharacter));
        });
    }

}
