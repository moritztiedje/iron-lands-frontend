import { Action } from '@ngrx/store';

export function loginReducer(state: string, action: LoginAction) {
    switch (action.type) {
        case 'LOGIN':
            return action.username;
        default:
            return state;
    }
}

export class LoginAction implements Action {
    constructor(public username: string) { }

    type: string = 'LOGIN';
}
