import React, {useState, useEffect} from "react"


// function MyComponent(){

//   // let [name, setName] = useState();
//   const [name, setName] = useState("Guest");
//   const [age, setAge] = useState(0);
//   const [isEmployed, setEmployed] = useState(false);

//   // const updateName = () => {
//   //   name = "Aefin";
//   //   console.log(name);
//   // }

//   const updateName = () => {
//     setName("Arefin");
//   }

//   const incrementAge = () => {
//     setAge(age + 1);
//   }

//   const toggleEmployedStatus = () => {
//     setEmployed(!isEmployed);
//   }

  

//   return(
//     <div>
//       <p>Name: {name} </p>
//       <button onClick={updateName}>Set Name</button>

//       <p>Age: {age} </p>
//       <button onClick={incrementAge}>Increment Age</button>

//       <p>Is Employed: {isEmployed ? "Yes" : "No"} </p>
//       <button onClick={toggleEmployedStatus}>toggle Status</button>

//     </div>
//   )

// }

// useEffect(function, [dependencies])

// 1, useEffect(() => {})  // run after every re- render
// 2, useEffect(( => {}, [])) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

function MyComponent(){

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color])

  function addCount(){
    setCount(c => c + 1);
  }

  function subtractCount(){
    setCount(c => c - 1);
  }

  function changeColor(){
    setColor(c => c === "Green" ? "Red" : "Green");
  }



  return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button> <br />
        <button onClick={changeColor}>Change Color</button>
  </>);
}
export default MyComponent