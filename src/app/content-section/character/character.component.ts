import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../app.module';
import { WindowSizes } from '../../redux/window-size';
import { PlayerCharacter } from '../../model/player-character';
import { ClientsProvider } from '../../rest-client/rest-client.module';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
    windowSize: WindowSizes;
    playerCharacter: PlayerCharacter;
    dailyJob: string;

    constructor(store: Store<PageState>, private clientsProvider: ClientsProvider) {
        store.subscribe(pageState => {
            this.playerCharacter = pageState.session.playerCharacter;
            this.windowSize = pageState.windowSize;
            this.dailyJob = pageState.session.dailyJob;
        });
    }

    eat(id: number) {
        this.clientsProvider.getConsumablesClient().eat(id);
    }

}
