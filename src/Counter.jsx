import React, {useState} from "react";

function Counter(){

  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    //updater function (use first latter of decleared variable)
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c +1);
  }

  const decrement = () => {
    // setCount(count - 1);
     //updater function (use first latter of decleared variable)
     setCount(c => c - 1);
     setCount(c => c - 1);
     setCount(c => c - 1);
  }

  const reset = () => {
    // setCount(0);
     //updater function (use first latter of decleared variable)
     setCount(c => c = 0);
  }

   const [name, setName] = useState("Guest");
   const [quantity, setQuantity] = useState(1);
   const [comment, setComment] = useState("");
   const [payment, setPayment] = useState("");
   const [shipping, setShipping] = useState("");
  
    function handleNameChange(event){
      setName(event.target.value);
    } 

    function handleQuantityChange(event){
      setQuantity(event.target.value);
    }

    function handleCommentChange(event){
      setComment(event.target.value);
    }

    function handlePaymentChange(event){
      setPayment(event.target.value);
    }

    function handleShippingChange(event){
      setShipping(event.target.value);
    }


    //Update object 
    const [car, setCar] = useState({
      year: 2024,
      make: "Ford",
      model: "Mustang"
    });

    function handleYearChange(event){
      setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
      setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
      setCar(c => ({...c, model: event.target.value}));
    }


    //update ARRAY in state

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value= "";

      setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
      setFoods(f => f.filter((_, i) => i !== index));
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

      <div>
        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
        <p>Comment: {comment}</p>
      </div>
      
      <div>
        <select value={comment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>payment: {payment}</p>
      </div>

      <div>
        <label>
          <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} /> Pick Up
        </label>
<br />
        <labe>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} /> Delivery
        </labe>
        <p>Shipping: {shipping}</p>
      </div>

      <div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="number"  value={car.year} onChange={handleYearChange}/> <br/>
        <input type="text"  value={car.make} onChange={handleMakeChange}/> <br/>
        <input type="text"  value={car.model} onChange={handleModelChange}/> <br/>
      </div>

      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food} </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>

    </div>
  );

}

export default Counter