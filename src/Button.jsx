

function Button(){

  let count = 0;

  // const handleClick = () => console.log("OUCH!");
  // const handleClick2 = (name) => console.log(`${name} stop clicking me broo..!`);
  const handleClick = (name) => {
    if(count < 3){
      count++;
      console.log(`${name} you clicked me ${count} time/s`)
    }
    else{
      console.log(`${name} stop clicking me broo..!`);
    }
  };

  return(
    
    // <button onClick={() => handleClick2("Arefin")}>Click me 😃</button> 
    //  <button onClick={handleClick2("Arefin")}>Click Me 😄</button> 
    <button onClick={() => handleClick("Arefin")}>Click me 😃</button>
    
   
  )
}

export default Button