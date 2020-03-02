import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';
import { ClientsProvider } from '../../../rest-client/rest-client.module';
import { Farm, displayState } from '../../../model/player-character';
import { ManagePropertiesClient } from '../../../rest-client/manage-properties-client';

@Component({
    selector: 'app-manage-properties',
    templateUrl: './manage-properties.component.html',
    styleUrls: ['./manage-properties.component.scss']
})
export class ManagePropertiesComponent {

    farms = new Array();
    playerlocation: Point = new Point(0, 0);
    restClient: ManagePropertiesClient;

    constructor(store: Store<PageState>, private clientsProvider: ClientsProvider) {
        this.restClient = clientsProvider.getManagePropertiesClient();
        store.subscribe(pageState => {
            let playerCharacter = pageState.session.playerCharacter;
            this.farms = playerCharacter.farms;
            this.playerlocation = new Point(playerCharacter.xcoordinate, playerCharacter.ycoordinate);
        });
    }

    isAtPlayerPosition(farm: Farm): boolean {
        return farm.xcoordinate == this.playerlocation.x && farm.ycoordinate == this.playerlocation.y
    }

    workOn(farmid: string) {
        this.restClient.workon(farmid);
    }
}

class Point {
    constructor(public x: number, public y: number) {
    }
}
