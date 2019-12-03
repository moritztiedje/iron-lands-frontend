import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';
import { ClientsProvider } from '../../../rest-client/rest-client.module';
import { TravelClient } from '../../../rest-client/travel-client';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {
    coordinate: Coordinate = new Coordinate();
    private travelClient: TravelClient;

    constructor(store: Store<PageState>, private clientsProvider: ClientsProvider) {
        this.travelClient = clientsProvider.getTravelClient();
        store.subscribe(pageState => {
            this.coordinate.x = pageState.session.playerCharacter.xcoordinate;
            this.coordinate.y = pageState.session.playerCharacter.ycoordinate;
        });
    }

    goWest() {
        this.travelClient.createTravelJob(this.coordinate.x - 1, this.coordinate.y);
    }

    goEast() {
        this.travelClient.createTravelJob(this.coordinate.x + 1, this.coordinate.y);
    }

    goNorth() {
        this.travelClient.createTravelJob(this.coordinate.x, this.coordinate.y + 1);
    }

    goSouth() {
        this.travelClient.createTravelJob(this.coordinate.x, this.coordinate.y - 1);
    }
}

class Coordinate {
    x: number;
    y: number;
}
