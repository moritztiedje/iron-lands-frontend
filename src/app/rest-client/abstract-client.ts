import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { environment } from '../../environments/environment';

export abstract class RestClient {
    private password: String;
    private sessionKey: String;

    constructor(protected http: HttpClient, protected store: Store<PageState>) {
        store.subscribe(pageState => {
            if (pageState.session) {
                this.password = pageState.session.password;
                this.sessionKey = pageState.session.key;
            }
        });
    }

    protected serverUrl = environment.serverUrl;

    protected hmac(stringToHash: string): string {
        let completeString = stringToHash + this.sessionKey + this.password;
        let hash = 0;
        for (var i = 0; i < completeString.length; i++)
            hash = Math.imul(31, hash) + completeString.charCodeAt(i) | 0;
        return hash + "";
    }

}
