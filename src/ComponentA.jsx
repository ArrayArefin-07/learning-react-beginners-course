// useContext() = react Hook that allows you to share values between multiple level of components without passing props through each level

import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";
import { use } from "react";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Arefin")

  return(
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}> 
        <ComponentB user={user}/>
      </UserContext.Provider>
      
    </div>
  )
}

export default ComponentA;