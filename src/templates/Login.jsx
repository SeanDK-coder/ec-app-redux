import { push } from "connected-react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../reducks/users/actions";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  console.log(selector.router);

  return (
    <div>
      <h2>Login</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: "1001", username: "DK" }));
          dispatch(push("/"));
        }}
      >
        login button
      </button>
    </div>
  );
};

export default Login;
