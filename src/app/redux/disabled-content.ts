import { Action } from "@ngrx/store";

export function disableContentReducer(state: boolean, action: Action) {
  switch (action.type) {
    case 'DISABLE_CONTENT':
      return false;
    case 'ENABLE_CONTENT':
      return true;
    default:
      return state;
  }
}

export class DisableContentAction implements Action {
  type: string = 'DISABLE_CONTENT';
}

export class EnableContentAction implements Action {
  type: string = 'ENABLE_CONTENT';
}
