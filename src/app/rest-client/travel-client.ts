import { HttpParams } from '@angular/common/http';
import { TravelJob } from '../model/player-character';
import { UpdateTravelJobAction } from '../redux/login';
import { RestClient } from './abstract-client';

export class TravelClient extends RestClient {

    createTravelJob(xcoordinate: number, ycoordinate: number) {
        this.authenticateAndSendRequest('createTravelJob', new HttpParams()
            .set('xcoordinate', xcoordinate.toString())
            .set('ycoordinate', ycoordinate.toString()), (travelJob: TravelJob) => {
                this.store.dispatch(new UpdateTravelJobAction(travelJob));
            });
    }

}
