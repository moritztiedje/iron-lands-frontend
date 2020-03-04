import { Component } from '@angular/core';
import { FarmJobPost } from '../../../model/job-board';
import { Store } from '@ngrx/store';
import { PageState } from '../../../app.module';
import { ClientsProvider } from '../../../rest-client/rest-client.module';
import { FarmJobClient } from '../../../rest-client/farm-job-client';

@Component({
    selector: 'app-job-board',
    templateUrl: './job-board.component.html',
    styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent {

    farmJobPosts = new Array<FarmJobPost>();
    restClient: FarmJobClient;

    constructor(store: Store<PageState>, clientsProvider: ClientsProvider) {
        store.subscribe(pageState => {
            this.farmJobPosts = pageState.jobPosts;
        });
        this.restClient = clientsProvider.getFarmJobClient();
        this.restClient.requestJobPosts();
    }

    accept(id: number) {
        this.restClient.acceptJob(id);
    }
}
