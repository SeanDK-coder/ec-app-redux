import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";
import { listenAuthState } from "./reducks/users/operations";

//유저가 signIn 한 상태인지 아닌지를 판단하는 함수. SignIn 상태에 따라 operation 에서 만든 listenAuthState를 실행해줄거임.
const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  //class형의 componentDidMount와 마찬가지로, 이 Auth 컴포넌트의 1번 렌더링이 된 다음에 실행하고 싶은 코드를 적는것
  //listenAuthState()는 redux의 operations이므로 dispatch를 써준다.
  //이렇게 하면 auth 컴포넌트가 불릴때는 먼저 children을 리턴하고 렌더가 끝나고 useEffect가 1번 실행된다. 그 안에서는 isSignIn의 상태에 따라 listenAuthState()를 실행해준다.
  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, []);

  //isSignedIn 이 false라면 빈 컴포넌트를 표시해준다. 아니면 listenAuthState같은거 안 불르고 children을 불른다 (Route에 있는 <Auth>에 둘러쌓여있는 컴포넌트를 return한다)
  if (!isSignedIn) {
    return <></>;
  } else {
    return children; //여기서 children은 <Home> 컴포넌트가 된다.
  }
};

export default Auth;
//Auth.jsx
