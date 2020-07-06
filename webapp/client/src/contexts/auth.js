import React, { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";

const initialState = {
  loading: null,
  user: localStorage.getItem("name") || null,
  companyId: localStorage.getItem("companyId") || null
}

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const history = useHistory();
  const [state, setState] = useReducer((state, newState) =>
    ({...state, ...newState}), initialState
  );
  const { user } = state;

  async function singIn(data) {
    setState({ loading: true });

    try {
      const { data: { name } } = await api.post("/sessions", data);
      setState({ user: name, companyId: data.id });

      localStorage.setItem("name", name);
      localStorage.setItem("companyId", data.id);

      history.push("/profile");
    } catch (error) {
      toast.error(`${error}`);
    }

    setState({ loading: false });
  }

  function singOut() {
    localStorage.clear();
    setState({ user: null });
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
