import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';
import { ClientsProvider } from '../../../rest-client/rest-client.module';
import { Farm } from '../../../model/player-character';

@Component({
    selector: 'app-manage-properties',
    templateUrl: './manage-properties.component.html',
    styleUrls: ['./manage-properties.component.scss']
})
export class ManagePropertiesComponent {

    farms = new Array();
    playerlocation: Point = new Point(0, 0);

    constructor(store: Store<PageState>, private clientsProvider: ClientsProvider) {
        store.subscribe(pageState => {
            let playerCharacter = pageState.session.playerCharacter;
            this.farms = playerCharacter.farms;
            this.playerlocation = new Point(playerCharacter.xcoordinate, playerCharacter.ycoordinate);
        });
    }

    display(farmState: string): string {
        switch (farmState) {
            case 'UNUSED': return 'not being used';
            case 'PLANTING_POTATOES': return 'being planted with potatoes';
            case 'GROWING_POTATOES': return 'growing potatoes';
            case 'HARVESTING_POTATOES': return 'being harvested for potatoes';
            default: return farmState;
        }
    }

    isAtPlayerPosition(farm: Farm): boolean {
        return farm.xcoordinate == this.playerlocation.x && farm.ycoordinate == this.playerlocation.y
    }
}

class Point {
    constructor(public x: number, public y: number) {
    }
}
