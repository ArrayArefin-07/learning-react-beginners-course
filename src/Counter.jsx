import React, {useState} from "react";

function Counter(){

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

   const [name, setName] = useState("Guest");
   const [quantity, setQuantity] = useState(1);
  
    function handleNameChange(event){
      setName(event.target.value);
    } 

    function handleQuantityChange(event){
      setQuantity(event.target.value);
    }

  return(
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>

      <div>
      <input value={name} onChange={handleNameChange} />
      <p>My name is {name}</p>
      </div>

      <div>
        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );

}

export default Counter