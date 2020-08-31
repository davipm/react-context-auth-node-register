import React, { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { SING_OUT, FETCH, SING_IN } from "./actionTypes";
import authReducer from "./authReducer";
import api from "../services/api";

const initialState = {
  loading: null,
  user: localStorage.getItem("name") || null,
  companyId: localStorage.getItem("companyId") || null
}

const AuthContext = createContext(initialState);

function AuthProvider({ children }) {
  const history = useHistory();
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { user } = state;

  async function singIn(data) {
    const { id } = data;
    dispatch({ type: FETCH});

    try {
      const { data: { name } } = await api.post("/sessions", data);
      dispatch({ type: SING_IN, payload: { name, id } });

      localStorage.setItem("name", name);
      localStorage.setItem("companyId", id);

      history.push("/profile");
    } catch (error) {
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
      value={{ singned: !!user, ...state, singIn, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
