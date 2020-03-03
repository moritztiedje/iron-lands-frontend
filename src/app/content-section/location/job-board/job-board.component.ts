import { Component } from '@angular/core';
import { FarmJobPost } from '../../../model/job-board';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';
import { ClientsProvider } from '../../../rest-client/rest-client.module';
import { JobBoardClient } from '../../../rest-client/job-board-client';

@Component({
    selector: 'app-job-board',
    templateUrl: './job-board.component.html',
    styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent {

    farmJobPosts = new Array<FarmJobPost>();
    restClient: JobBoardClient;

    constructor(store: Store<PageState>, clientsProvider: ClientsProvider) {
        store.subscribe(pageState => {
            this.farmJobPosts = pageState.jobPosts;
        });
        this.restClient = clientsProvider.getJobBoardClient();
        this.restClient.requestJobPosts();
    }

    accept(id: number) {
        this.restClient.acceptFarmJob(id);
    }
}
