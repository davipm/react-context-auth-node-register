import { useAuth } from "../contexts/auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const { signed } = useAuth();

  return !signed ? <AppRoutes /> : <AuthRoutes />;
}
