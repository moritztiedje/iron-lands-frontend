import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContentSectionComponent } from './content-section.component';
import { CharacterComponent } from './character/character.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LocationComponent } from './location/location.component';
import { MessagesComponent } from './messages/messages.component';
import { MarketComponent } from './location/market/market.component';
import { TownHouseComponent } from './location/town-house/town-house.component';
import { JobBoardComponent } from './location/job-board/job-board.component';
import { TravelComponent } from './location/travel/travel.component';
import { ManagePropertiesComponent } from './location/manage-properties/manage-properties.component';

@NgModule({
    declarations: [
        ContentSectionComponent,
        CharacterComponent,
        UnderConstructionComponent,
        LocationComponent,
        MessagesComponent,
        MarketComponent,
        TownHouseComponent,
        JobBoardComponent,
        TravelComponent,
        ManagePropertiesComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [ContentSectionComponent]
})
export class ContentSectionModule { }
