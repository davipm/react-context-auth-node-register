import { SING_IN, FETCH, SING_OUT, ERROR } from "./actionTypes";
import { initialState } from "./auth";

type ActionType =
  | { type: "FETCH" }
  | { type: "ERROR" }
  | { type: "SING_IN"; payload: { name: string; id: string } }
  | { type: "SING_OUT" };

export default (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SING_IN:
      return {
        ...state,
        loading: false,
        user: action.payload.name,
        companyId: action.payload.id,
      };
    case SING_OUT:
      return {
        ...state,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
