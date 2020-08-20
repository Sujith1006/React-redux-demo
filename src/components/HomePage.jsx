import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_CAKE } from "../action/cakeBuyAction";
import { fetchUsers } from "../action/userFecthaction";
function HomePage(props) {
  const noOfcake = useSelector((state) => state.cake);
  // console.log(noOfcake);
  const dispath = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispath({ type: "FETCH_USER", payload: data });
      });
  }, []);
  const users = useSelector((state) => state.users);
  return (
    <div>
      <h3>{noOfcake}</h3>
      <button onClick={() => dispath({ type: "BUY_CAKE" })}>Buy Cake</button>
      {users.length === 0
        ? ""
        : users.map((ele, ind) => {
            return <h1 key={ind}>{ele.name}</h1>;
          })}
    </div>
  );
}

export default HomePage;
