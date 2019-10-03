import { Action } from "@ngrx/store";

export enum WindowSizes {
  Large,
  Medium,
  Mobile
}

export function windowSizeReducer(state: WindowSizes, action: WindowResizedAction) {
  switch (action.type) {
    case 'RESIZE':
      return determineWindowSize(action);
    default:
      return state;
  }
}

function determineWindowSize(action: WindowResizedAction) {
  if (action.windowWidth >= 1500)
    return WindowSizes.Large;
  else if (action.windowWidth > 1024)
    return WindowSizes.Medium;
  else
    return WindowSizes.Mobile
}

export class WindowResizedAction implements Action {
  type: string = 'RESIZE';

  constructor(public windowWidth: number, public windowHeight: number) { }
}
