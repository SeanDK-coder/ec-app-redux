import React from "react";
import { useSelector } from "react-redux";
import { getUserId, getUsername } from "../reducks/users/selectors";

const Home = () => {
  const selector = useSelector((state) => state); //store전체 state불러오기

  const uid = getUserId(selector);
  const username = getUsername(selector);

  console.log(selector.router);
  return (
    <div>
      <h2>Home</h2>
      <p>user Id : {uid}</p>
      <p>username : {username}</p>
      <p></p>
    </div>
  );
};

export default Home;
