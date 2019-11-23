import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentPages, NavigateContentAction } from '../redux/active-content';
import { PageState } from '../app.module';
import { EnableContentAction } from '../redux/disabled-content';
import { release } from 'os';

@Component({
    selector: 'app-content-section',
    templateUrl: './content-section.component.html',
    styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {

    selection: ContentPages;
    enabled: boolean;

    constructor(store: Store<PageState>) {
        store.dispatch(new NavigateContentAction(ContentPages.character));
        store.dispatch(new EnableContentAction());

        store.subscribe(pageState => {
            this.selection = pageState.activeContent;
            this.enabled = pageState.enabledContent;
        });
    }

    characterPageSelected() {
        return this.selection == ContentPages.character;
    }

    locationPageSelected() {
        return this.selection == ContentPages.location;
    }

    marketPageSelected() {
        return this.selection == ContentPages.market;
    }

    townHousePageSelected() {
        return this.selection == ContentPages.townHouse;
    }

    jobBoardPageSelected() {
        return this.selection == ContentPages.jobBoard;
    }

    messagesPageSelected() {
        return this.selection == ContentPages.messages;
    }

    travelPageSelected() {
        return this.selection == ContentPages.travel;
    }

    unimplementedPageSelected() {
        return this.selection !== ContentPages.character
            && this.selection !== ContentPages.location
            && this.selection !== ContentPages.messages
            && this.selection !== ContentPages.jobBoard
            && this.selection !== ContentPages.market
            && this.selection !== ContentPages.townHouse
            && this.selection !== ContentPages.travel;
    }

}
