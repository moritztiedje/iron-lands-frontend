import { Component, OnInit } from '@angular/core';
import { ContentPages, NavigateContentAction } from '../../redux/active-content';
import { Store } from '@ngrx/store';
import { PageState } from '../../app.module';

@Component({
    selector: 'app-navigation-menu-content',
    templateUrl: './navigation-menu-content.component.html',
    styleUrls: ['./navigation-menu-content.component.scss']
})
export class NavigationMenuContentComponent {

    selection: ContentPages;

    constructor(private store: Store<PageState>) {
        store.subscribe(pageState => this.selection = pageState.activeContent);
    }

    selectCharacter() {
        this.store.dispatch(new NavigateContentAction(ContentPages.character))
    }

    characterIsSelected() {
        return this.selection === ContentPages.character;
    }

    selectLocation() {
        this.store.dispatch(new NavigateContentAction(ContentPages.location))
    }

    locationIsSelected() {
        return this.selection === ContentPages.location
            || this.selection === ContentPages.jobBoard
            || this.selection === ContentPages.market
            || this.selection === ContentPages.townHouse;
    }

    selectMessages() {
        this.store.dispatch(new NavigateContentAction(ContentPages.messages))
    }

    messagesIsSelected() {
        return this.selection === ContentPages.messages;
    }

    selectDonate() {
        this.store.dispatch(new NavigateContentAction(ContentPages.donate))
    }

    donateIsSelected() {
        return this.selection === ContentPages.donate;
    }

    selectContact() {
        this.store.dispatch(new NavigateContentAction(ContentPages.contact))
    }

    contactIsSelected() {
        return this.selection === ContentPages.contact;
    }

}
