import { HttpParams } from '@angular/common/http';
import { RestClient } from './abstract-client';
import { FarmJobPost } from '../model/job-board';
import { UpdateJobBoardAction } from '../redux/job-board';
import { Farm } from '../model/player-character';

export class JobBoardClient extends RestClient {
    requestMarketListings() {
        this.authenticateAndSendRequest('requestJobPosts', new HttpParams(), (jobPosts: Array<FarmJobPost>) => {
            jobPosts.forEach(
                function (jobPost: FarmJobPost) {
                    // Cast implicit to real object, so that Farm functions can be used.
                    jobPost.farm = new Farm(jobPost.farm);
                }
            )
            this.store.dispatch(new UpdateJobBoardAction(jobPosts));
        });
    }
}
