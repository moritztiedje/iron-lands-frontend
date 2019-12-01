import { Action } from '@ngrx/store';
import { PlayerCharacter, TravelJob } from '../model/player-character';
import { Session } from '../model/session';

export class CreateSessionAction implements Action {
    constructor(public sessionKey: String, public password: String, public username: String) { }

    type: string = 'CREATE_SESSION';
}

export class UpdatePlayerAction implements Action {
    constructor(public player: PlayerCharacter) { }

    type: string = 'UPDATE_PLAYER';
}

export class UpdateTravelJobAction implements Action {
    activeJob: string;

    constructor(travelJob: TravelJob) {
        this.activeJob = "Travel to: " + travelJob.xcoordinate + " " + travelJob.ycoordinate;
    }

    type: string = 'UPDATE_JOB';
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
            session.dailyJob = action.activeJob;
        default:
            return session;
    }
}
