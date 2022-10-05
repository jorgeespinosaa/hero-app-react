import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContex";
import { types } from "../types/types";

export const LoginScreem = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  

  const handleLogin = () => {
    if (name.length === 0) {
    } else {
      const action = {
        type: types.login,
        payload: { name: name },
      };

      dispatch(action);

      const lastPath = localStorage.getItem("lastPath") || "/marvel";

      navigate(lastPath, {
        replace: true,
      });
    }
  };

  const inputValue = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome</h1>
      <hr />

      <form onSubmit={handleLogin} className="row col-5">
        <h6>Name: </h6>
        <input
          required
          className="form-control"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={inputValue}
        />

        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreem;
