import { Action } from '@ngrx/store';
import { FarmJobPost } from '../model/job-board';


export class UpdateJobBoardAction implements Action {
    constructor(public jobPosts: Array<FarmJobPost>) { }

    type: string = 'NEW_JOB_POSTS';
}

export class DeleteJobPostAction implements Action {
    constructor(public jobPostId: number) { }

    type: string = 'DELETE_JOB_POST';
}

export function jobBoardReducer(jobPosts: Array<FarmJobPost>, action): Array<FarmJobPost> {
    switch (action.type) {
        case 'NEW_JOB_POSTS':
            return action.jobPosts;
        case 'DELETE_JOB_POST':
            return jobPosts.filter(function (jobPost: FarmJobPost) { jobPost.id != action.jobPostId });
        default:
            return jobPosts;
    }
}
