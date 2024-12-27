import React, {useState} from "react"

function MyComponent(){

  // let [name, setName] = useState();
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployed] = useState(false);

  // const updateName = () => {
  //   name = "Aefin";
  //   console.log(name);
  // }

  const updateName = () => {
    setName("Arefin");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
    setEmployed(!isEmployed);
  }

  return(
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age} </p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"} </p>
      <button onClick={toggleEmployedStatus}>toggle Status</button>

    </div>
  )

}
export default MyComponent