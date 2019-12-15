import { Action } from '@ngrx/store';
import { PlayerCharacter, Consumable } from '../model/player-character';
import { Session } from '../model/session';

export class CreateSessionAction implements Action {
    constructor(public sessionKey: String, public password: String, public username: String) { }

    type: string = 'CREATE_SESSION';
}

export class UpdatePlayerAction implements Action {
    constructor(public player: PlayerCharacter) { }

    type: string = 'UPDATE_PLAYER';
}

export class UpdateDailyJobAction implements Action {
    
    constructor(public dailyJob: string) { }

    type: string = 'UPDATE_JOB';
}

export class UpdateConsumablesAction implements Action {
    constructor(public consumables: Array<Consumable>) { }

    type: string = 'UPDATE_CONSUMABLES';
}

export class UpdateCopperAction implements Action {
    constructor(public copper: number) { }

    type: string = 'UPDATE_COPPER';
}

export function loginReducer(session: Session, action): Session {
    switch (action.type) {
        case 'CREATE_SESSION':
            let newSession = new Session();
            newSession.key = action.sessionKey;
            newSession.password = action.password;
            newSession.username = action.username;
            return newSession;
        case 'UPDATE_PLAYER':
            session.playerCharacter = action.player;
            return session;
        case 'UPDATE_JOB':
            session.dailyJob = action.dailyJob;
            return session;
        case 'UPDATE_CONSUMABLES':
            session.playerCharacter.consumables = action.consumables;
            return session;
        case 'UPDATE_COPPER':
            session.playerCharacter.copper = action.copper;
            return session;
        default:
            return session;
    }
}
