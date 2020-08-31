import { SING_IN, FETCH, SING_OUT } from "./actionTypes";

export default (state, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true
      }
    case SING_IN:
      return {
        ...state,
        loading: false,
        user: action.payload.name,
        companyId: action.payload.id
      }
    case SING_OUT:
      return {
        ...state,
        loading: false,
        user: null,
      }
  }
}
