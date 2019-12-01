import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { PageState } from '../app.module';
import { environment } from '../../environments/environment';

export abstract class RestClient {
    private password: string;
    private sessionKey: string;
    private username: string;

    constructor(protected http: HttpClient, protected store: Store<PageState>) {
        store.subscribe(pageState => {
            if (pageState.session) {
                this.password = pageState.session.password;
                this.sessionKey = pageState.session.key;
                this.username = pageState.session.username;
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

    protected authenticateAndSendRequest(requestUrl: String, parameters: HttpParams, resultProcessor) {
        parameters = parameters.set('username', this.username);

        let fullParameterString = '';
        for (var key of parameters.keys()) {
            fullParameterString += parameters.get(key);
        }
        console.log(fullParameterString);

        parameters = parameters.set('hmac', this.hmac(fullParameterString))

        console.log(parameters);

        this.http.get(this.serverUrl + requestUrl, { params: parameters }).subscribe(resultProcessor);
    }

}
