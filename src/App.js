import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "./reducks/users/actions";

function App() {
  const dispatch = useDispatch(); //리액트 리덕스의 hooks 꼭 이렇게 변수에 넣어줘야한다!!
  const selector = useSelector((state) => state); //리액트 리덕스의 hooks store의 state가 보존되어 있는 상태임 selector엔

  console.log(selector.users);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() =>
            dispatch(signInAction({ uid: "0001", username: "DK" }))
          }
        >
          Sign In{" "}
        </button>
      </header>
    </div>
  );
}

export default App;
