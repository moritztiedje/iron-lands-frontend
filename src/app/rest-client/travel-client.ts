import { HttpParams } from '@angular/common/http';
import { UpdateDailyJobAction } from '../redux/login';
import { RestClient } from './abstract-client';

export class TravelClient extends RestClient {

    createTravelJob(xcoordinate: number, ycoordinate: number) {
        this.authenticateAndSendRequest('createTravelJob',
            new HttpParams()
                .set('xcoordinate', xcoordinate.toString())
                .set('ycoordinate', ycoordinate.toString()),
            (dailyJobInfo: DailyJobInfo) => {
                this.store.dispatch(new UpdateDailyJobAction(dailyJobInfo.info));
            });
    }

}

class DailyJobInfo {
    info: string;
}
