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

    //Update Array of object in state
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
      const newCar = {
        year: carYear,
        make: carMake,
        model: carModel
      }
      setCars(c => [...c, newCar]);

      setCarYear(new Date().getFullYear());
      setCarMake("");
      setCarModel("");
    }

    function handleRemoveCar(index){
     setCar(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
      setCarYear(event.target.value);
    }

    function handleMakeChange(event){
      setCarMake(event.target.value);
    }

    function handleMdelChange(event){
      setCarModel(event.target.value);
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

      <div>
          <h2>List of Car Objects</h2>
          <ul>
            {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>)}
          </ul>

          <input type="number" value={carYear} onChange={handleYearChange} /> <br/>
          <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" /> <br/>
          <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" /> <br/>
          
          <button onClick={handleAddCar}>Add Car</button>
      </div>

    </div>
  );

}

export default Counter