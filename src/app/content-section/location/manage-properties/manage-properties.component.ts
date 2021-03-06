import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';
import { ClientsProvider } from '../../../rest-client/rest-client.module';
import { Farm } from '../../../model/player-character';
import { FarmJobClient } from '../../../rest-client/farm-job-client';

@Component({
    selector: 'app-manage-properties',
    templateUrl: './manage-properties.component.html',
    styleUrls: ['./manage-properties.component.scss']
})
export class ManagePropertiesComponent {

    farms = new Array();
    playerlocation: Point = new Point(0, 0);
    farmJobClient: FarmJobClient;

    constructor(store: Store<PageState>, private clientsProvider: ClientsProvider) {
        this.farmJobClient = clientsProvider.getFarmJobClient();
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
        this.farmJobClient.workon(farmid);
    }

    postJob(farmid: number, salary: number) {
        this.farmJobClient.postJob(farmid, salary);
    }
}

class Point {
    constructor(public x: number, public y: number) {
    }
}
