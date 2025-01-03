//useState() = re-render the component when the state value changes.

// useRef() = 'use referance' Does not cause re-renders when it's value changes, when you want a component to "remember" some information, but you don't want that information to trigger new renders.

// 1. Accessing/ Interacting with DOM elements
// 2. Handling Focus, Animation, and Transitions
// 3. Managing Timer and Intervals



import React, {useState, useEffect, useRef} from "react";

function ComponentUseRefe(){

  // let [number, setNumber] = useState(0);
  const ref = useRef(0);


    useEffect(() => {
      console.log("Component Rendered");
    });


    function handleClick(){
      // setNumber(n => n + 1);
      ref.current++;
      console.log(ref.current);
    }

  return(

    <button onClick={handleClick}>
      Click Me.!
    </button>
  )

}

export default ComponentUseRefe; 