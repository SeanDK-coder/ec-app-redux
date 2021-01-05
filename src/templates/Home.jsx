import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((state) => state);

  console.log(selector.router);
  return <h2>Home</h2>;
};

export default Home;
