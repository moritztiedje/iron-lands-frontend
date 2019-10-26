import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../app.module';
import { WindowSizes } from '../../redux/window-size';
import { PlayerCharacter } from '../../model/player-character';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
    windowSize: WindowSizes;
    playerCharacter: PlayerCharacter;

    constructor(store: Store<PageState>) {
        store.subscribe(pageState => {
            this.playerCharacter = pageState.playerCharacter;
            this.windowSize = pageState.windowSize;
        });
    }

}
