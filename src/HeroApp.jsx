import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContex";
import { AppRouter } from "./routes/AppRouter";
import { authReducer } from "./auth/authRedecer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeroApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroApp;
