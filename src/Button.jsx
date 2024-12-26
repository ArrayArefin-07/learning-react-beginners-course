

function Button(){

  // const handleClick = () => console.log("OUCH!");
  const handleClick2 = (name) => console.log(`${name} stop clicking me broo..!`);

  return(
    
    <button onClick={() => handleClick2("Arefin")}>Click me 😃</button> 
    //  <button onClick={handleClick2("Arefin")}>Click Me 😄</button> 
    
   
  )
}

export default Button