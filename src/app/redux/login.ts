import { Action } from '@ngrx/store';
import { PlayerCharacter } from '../model/player-character';
import { Session } from '../model/session';

export class CreateSessionAction implements Action {
    constructor(public sessionKey: String, public password: String) { }

    type: string = 'CREATE_SESSION';
}

export class UpdatePlayerAction implements Action {
    constructor(public player: PlayerCharacter) { }

    type: string = 'UPDATE_PLAYER';
}

export function loginReducer(session: Session, action): Session {
    switch (action.type) {
        case 'CREATE_SESSION':
            let newSession = new Session();
            newSession.key = action.sessionKey;
            newSession.password = action.password;
            return newSession;
        case 'UPDATE_PLAYER':
            session.playerCharacter = action.player;
            return session;
        default:
            return session;
    }
}
