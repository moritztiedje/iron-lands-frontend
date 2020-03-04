import { HttpParams } from '@angular/common/http';
import { RestClient } from './abstract-client';
import { FarmJobPost } from '../model/job-board';
import { UpdateJobBoardAction, DeleteJobPostAction } from '../redux/job-board';
import { Farm } from '../model/player-character';
import { DailyJobInfo } from '../model/daily-job-info';
import { UpdateDailyJobAction, UpdateCopperAction } from '../redux/login';

export class FarmJobClient extends RestClient {
    requestJobPosts() {
        this.authenticateAndSendRequest('requestFarmJobPosts', new HttpParams(), (jobPosts: Array<FarmJobPost>) => {
            jobPosts.forEach(
                function (jobPost: FarmJobPost) {
                    // Cast implicit to real object, so that Farm functions can be used.
                    jobPost.farm = new Farm(jobPost.farm);
                }
            )
            this.store.dispatch(new UpdateJobBoardAction(jobPosts));
        });
    }

    acceptJob(jobPostId: number) {
        this.authenticateAndSendRequest('acceptFarmJobPost', new HttpParams().set("id", jobPostId.toString()), (dailyJobInfo: DailyJobInfo) => {
            this.store.dispatch(new UpdateDailyJobAction(dailyJobInfo.info));
            this.store.dispatch(new DeleteJobPostAction(jobPostId));
        });
    }

    postJob(farmId: number, salary: number) {
        this.authenticateAndSendRequest('postFarmJob', new HttpParams()
            .set("farmId", farmId.toString()).set("salary", salary.toString()), (copperUpdate: number) => {
                this.store.dispatch(new UpdateCopperAction(copperUpdate));
            });
    }

    workon(farmId: string) {
        this.authenticateAndSendRequest('workonfarm', new HttpParams().set('id', farmId.toString()), (dailyJobInfo: DailyJobInfo) => {
            this.store.dispatch(new UpdateDailyJobAction(dailyJobInfo.info));
        });
    }
}
