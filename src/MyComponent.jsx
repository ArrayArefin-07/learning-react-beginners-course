import React, {useState} from "react"

function MyComponent(){

  // let [name, setName] = useState();
  const [name, setName] = useState("Guest");

  // const updateName = () => {
  //   name = "Aefin";
  //   console.log(name);
  // }

  const updateName = () => {
    setName("Arefin");
  }

  return(
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>Set Name</button>
    </div>
  )

}
export default MyComponent