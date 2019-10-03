import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContentSectionComponent } from './content-section.component';
import { CharacterComponent } from './character/character.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { LocationComponent } from './location/location.component';
import { ImageTextBoxComponent } from './util/image-text-box/image-text-box.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [
        ContentSectionComponent,
        CharacterComponent,
        UnderConstructionComponent,
        LocationComponent,
        ImageTextBoxComponent,
        MessagesComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [ContentSectionComponent]
})
export class ContentSectionModule { }
