import { createContext, useContext, useReducer, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { ActionEnum } from "./authReducer";
import authReducer from "./authReducer";
import api from "../services/api";
import { LoginInputInterface } from "../pages/Logon";

interface AuthContextInterface {
  loading: boolean | null;
  error: boolean | null;
  user: string | null;
  companyId: string | null;
  singIn?: (id: LoginInputInterface) => void;
  singOut?: () => void;
  signed?: boolean;
}

interface Props {
  children: ReactNode;
}

export const initialState: AuthContextInterface = {
  loading: null,
  error: null,
  user: localStorage.getItem("name") || null,
  companyId: localStorage.getItem("companyId") || null,
};

const AuthContext = createContext<AuthContextInterface>(initialState);

export default function AuthProvider({ children }: Props) {
  const history = useHistory();
  const [state, dispatch] = useReducer(authReducer, initialState);

  async function singIn(data: LoginInputInterface) {
    const { id } = data;
    dispatch({ type: ActionEnum.FETCH });

    try {
      const {
        data: { name },
      } = await api.post("/sessions", data);
      dispatch({ type: ActionEnum.SING_IN, payload: { name, id } });

      localStorage.setItem("name", name);
      localStorage.setItem("companyId", id);

      history.push("/profile");
    } catch (error) {
      dispatch({ type: ActionEnum.ERROR });
      toast.error(`${error}`);
    }
  }

  function singOut() {
    localStorage.clear();
    dispatch({ type: ActionEnum.SING_OUT });
    history.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!state.user, ...state, singIn, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
