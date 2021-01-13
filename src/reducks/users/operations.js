import { signInAction } from "./actions";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from "../../firebase/index";

export const signIn = (email, password) => {
  return async (dispatch) => {
    //Validation
    if (email === "" || password === "") {
      alert("You should input all the required");
      return false;
    }

    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;

      if (user) {
        const uid = user.uid;

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username,
              })
            );

            dispatch(push("/"));
          });
      }
    });
  };

  // return async (dispatch, getState) => {
  //   const state = getState();
  //   const isSignedIn = state.users.isSignedIn;

  //   if (!isSignedIn) {
  //     const url = "https://api.github.com/users/SeanDK-coder";

  //     const response = await fetch(url) //fetch자체는 비동기함수기때문에 기다리지 않고 바로실행해버림. await로 비동기처리!
  //       .then((res) => res.json())
  //       .catch(() => null);

  //     const username = response.login;

  //     dispatch(
  //       signInAction({
  //         isSignedIn: true,
  //         uid: "000001",
  //         username: username,
  //       })
  //     );
  //     dispatch(push("/"));
  //   }
  // };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    //validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please input all the required sections");
      return false; //signUp함수는 이 이후로 실행 되지 않고 끝난다라는걸 알려줌
    }
    if (password !== confirmPassword) {
      alert("Password is incorrect. Please check your password");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: username,
          };

          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/"));
            });
        }
      });
  };
};
