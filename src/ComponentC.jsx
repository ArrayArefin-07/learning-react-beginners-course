// useContext() = react Hook that allows you to share values between multiple level of components without passing props through each level

import React, {useContext} from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC(){

  const user = useContext(UserContext);
  return(
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Helo again ${user}`}</h2>
      <ComponentD/>
    </div>
  )
}

export default ComponentC;