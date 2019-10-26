import { Action } from '@ngrx/store';
import { PlayerCharacter } from '../model/player-character';

export function loginReducer(state: string, action: LoginAction) {
    switch (action.type) {
        case 'LOGIN':
            return action.player;
        default:
            return state;
    }
}

export class LoginAction implements Action {
    constructor(public player: PlayerCharacter) { }

    type: string = 'LOGIN';
}
