//useState() = re-render the component when the state value changes.

// useRef() = 'use referance' Does not cause re-renders when it's value changes, when you want a component to "remember" some information, but you don't want that information to trigger new renders.

// 1. Accessing/ Interacting with DOM elements
// 2. Handling Focus, Animation, and Transitions
// 3. Managing Timer and Intervals

import React, { useState, useEffect, useRef } from "react";

function ComponentUseRefe() {
  // let [number, setNumber] = useState(0);
  const ref = useRef(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)

  // console.log(ref);

  useEffect(() => {
    console.log("Component Rendered");
    // console.log(inputRef);
  });

  function handleClick1() {
    // setNumber(n => n + 1);
    // ref.current++;
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2(){
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3(){
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click Me 1.!</button> <br/>
      <input type="text" ref={inputRef1} /> <hr />

      <button onClick={handleClick2}>Click Me 2.!</button> <br/>
      <input type="text" ref={inputRef2} /> <hr />

      <button onClick={handleClick3}>Click Me 3.!</button> <br/>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default ComponentUseRefe;
