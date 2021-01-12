import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { PrimaryButton, TextInput } from "../components/UIkit/";
import { signUp } from "../reducks/users/operations";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    //함수의 메모화 => 퍼포먼스가 좋아진다
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );
  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );
  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">Sign Up</h2>
      <div className="module-spacer--medium" />{" "}
      {/* //위는 공백을 만들기 위한
       */}
      <TextInput
        fullWidth={true}
        label={"Username"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername} //함수 그대로 넣는것을 주의
      />
      <TextInput
        fullWidth={true}
        label={"Email"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"password"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <TextInput
        fullWidth={true}
        label={"password confirmation"}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={"password"}
        onChange={inputConfirmPassword}
      />
      <div className="module-spacer--medium" />{" "}
      <div className="center">
        <PrimaryButton
          label={"Account Register"}
          onClick={() =>
            dispatch(signUp(username, email, password, confirmPassword))
          }
        />
      </div>
    </div>
  );
};

export default SignUp;
