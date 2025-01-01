// useContext() = react Hook that allows you to share values between multiple level of components without passing props through each level


import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD(){

    const user = useContext(UserContext);

  return(
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default ComponentD;