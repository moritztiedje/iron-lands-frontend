import { Action } from '@ngrx/store';

export enum ContentPages {
    donate,
    gallery,
    contact,
    character,
    location,
    jobBoard,
    market,
    townHouse,
    messages
}

export function activeContentReducer(state: ContentPages, action: NavigateContentAction) {
  switch (action.type) {
    case 'SELECTION':
      return action.selectedElement;
    default:
      return state;
  }
}

export class NavigateContentAction implements Action {
  type: string = 'SELECTION';

  constructor(public selectedElement: ContentPages) { }
}
