import { initialState } from "./auth";

export enum ActionEnum {
  FETCH = "FETCH",
  ERROR = "ERROR",
  SING_IN = "SING_IN",
  SING_OUT = "SING_OUT",
}

type ActionType =
  | { type: ActionEnum.FETCH }
  | { type: ActionEnum.ERROR }
  | { type: ActionEnum.SING_IN; payload: { name: string; id: string } }
  | { type: ActionEnum.SING_OUT };

export default (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case ActionEnum.FETCH:
      return {
        ...state,
        loading: true,
      };
    case ActionEnum.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionEnum.SING_IN:
      return {
        ...state,
        loading: false,
        user: action.payload.name,
        companyId: action.payload.id,
      };
    case ActionEnum.SING_OUT:
      return {
        ...state,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
