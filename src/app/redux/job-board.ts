import { Action } from '@ngrx/store';
import { FarmJobPost } from '../model/job-board';


export class UpdateJobBoardAction implements Action {
    constructor(public jobPosts: Array<FarmJobPost>) { }

    type: string = 'NEW_JOB_POSTS';
}

export function jobBoardReducer(jobPosts: Array<FarmJobPost>, action: UpdateJobBoardAction): Array<FarmJobPost> {
    switch (action.type) {
        case 'NEW_JOB_POSTS':
            return action.jobPosts;
        default:
            return jobPosts;
    }
}
