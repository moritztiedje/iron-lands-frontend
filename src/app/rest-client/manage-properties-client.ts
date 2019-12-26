import { HttpParams } from '@angular/common/http';
import { DailyJobInfo } from '../model/daily-job-info';
import { UpdateDailyJobAction } from '../redux/login';
import { RestClient } from './abstract-client';

export class ManagePropertiesClient extends RestClient {

    workon(farmId: string) {
        this.authenticateAndSendRequest('workonfarm', new HttpParams().set('id', farmId.toString()), (dailyJobInfo: DailyJobInfo) => {
            this.store.dispatch(new UpdateDailyJobAction(dailyJobInfo.info));
        });
    }

}
