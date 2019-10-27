import { Action } from '@ngrx/store';
import { PlayerCharacter } from '../model/player-character';
import { Session } from '../model/session';

export class CreateSessionAction implements Action {
    constructor(public sessionKey: String) { }

    type: string = 'CREATE_SESSION';
}

export class LoginAction implements Action {
    constructor(public player: PlayerCharacter) { }

    type: string = 'LOGIN';
}

export function loginReducer(session: Session, action): Session {
    switch (action.type) {
        case 'LOGIN':
            session.playerCharacter = action.player;
            return session;
        case 'CREATE_SESSION':
            let newSession = new Session();
            newSession.key = action.sessionKey;
            return newSession;
        default:
            return session;
    }
}
