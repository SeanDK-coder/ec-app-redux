import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/SeanDK-coder";

      const response = await fetch(url) //fetch자체는 비동기함수기때문에 기다리지 않고 바로실행해버림. await로 비동기처리!
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "000001",
          username: username,
        })
      );
      dispatch(push("/"));
    }
  };
};
