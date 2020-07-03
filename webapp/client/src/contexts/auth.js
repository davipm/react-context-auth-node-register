import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState(localStorage.getItem("name") || null);
  const [companyId, setCompanyId] = useState(
    localStorage.getItem("companyId") || null
  );

  async function singIn(data) {
    try {
      const { data: { name } } = await api.post("/sessions", data);
      setUser(name);
      setCompanyId(data.id);

      localStorage.setItem("name", name);
      localStorage.setItem("companyId", data.id);

      history.push("/profile");
    } catch (error) {
      toast.error(`${error}`, {
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }

  function singOut() {
    localStorage.clear();
    setUser(null);
    history.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ singned: !!user, user, companyId, singIn, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
