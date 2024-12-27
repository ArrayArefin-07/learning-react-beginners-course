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

    </div>
  );

}

export default Counter