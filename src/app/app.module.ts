import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { activeContentReducer, ContentPages } from './redux/active-content';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';
import { ContentSectionComponent } from './content-section/content-section.component';
import { ContentSectionModule } from './content-section/content-section.module';
import { windowSizeReducer, WindowSizes } from './redux/window-size';
import { disableContentReducer } from './redux/disabled-content';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { loginReducer } from './redux/login';

@NgModule({
    declarations: [
        AppComponent,
        LoginScreenComponent
    ],
    imports: [
        BrowserModule,
        TopNavBarModule,
        ContentSectionModule,
        StoreModule.forRoot({
            activeContent: activeContentReducer,
            windowSize: windowSizeReducer,
            enabledContent: disableContentReducer,
            username: loginReducer
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

export interface PageState {
    activeContent: ContentPages;
    windowSize: WindowSizes;
    enabledContent: boolean;
    username: string
}
