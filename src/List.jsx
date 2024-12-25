

function List(){

  // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  const fruits = [
    {id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105}, 
    {id: 4, name: "coconut", calories: 159}, 
    {id: 5, name: "pineapple", calories: 37}];

  // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical order
  // fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse Alphabetical order
  // fruits.sort((a,b) => a.calories - b.calories); //Numerical order
  // fruits.sort((a,b) => b.calories - a.calories); //Numerical order



  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b> </li>);

  return(<ol>{listItems}</ol>);

}

export default List