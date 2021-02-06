import { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { SING_OUT, FETCH, SING_IN, ERROR } from "./actionTypes";
import authReducer from "./authReducer";
import api from "../services/api";

const initialState = {
  loading: null,
  error: null,
  user: localStorage.getItem("name") || null,
  companyId: localStorage.getItem("companyId") || null,
};

const AuthContext = createContext(initialState);

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [state, dispatch] = useReducer(authReducer, initialState);

  async function singIn(data) {
    const { id } = data;
    dispatch({ type: FETCH });

    try {
      const {
        data: { name },
      } = await api.post("/sessions", data);
      dispatch({ type: SING_IN, payload: { name, id } });

      localStorage.setItem("name", name);
      localStorage.setItem("companyId", id);

      history.push("/profile");
    } catch (error) {
      dispatch({ type: ERROR });
      toast.error(`${error}`);
    }
  }

  function singOut() {
    localStorage.clear();
    dispatch({ type: SING_OUT });
    history.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ singned: !!state.user, ...state, singIn, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
