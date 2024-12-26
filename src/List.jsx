import PropTypes from 'prop-types'

function List(props){

  // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
  // const fruits = [
  //   {id: 1, name: "apple", calories: 95}, 
  //   {id: 2, name: "orange", calories: 45}, 
  //   {id: 3, name: "banana", calories: 105}, 
  //   {id: 4, name: "coconut", calories: 159}, 
  //   {id: 5, name: "pineapple", calories: 37}];

  // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical order
  // fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse Alphabetical order
  // fruits.sort((a,b) => a.calories - b.calories); //Numerical order
  // fruits.sort((a,b) => b.calories - a.calories); //Numerical order

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);



  // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b> </li>);

  // Low calories fruits
  // const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>{lowCalFruits.name}: &nbsp; <b>{lowCalFruits.calories}</b> </li>);

  //high calories fruits
  // const listItems = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>{highCalFruits.name}: &nbsp; <b>{highCalFruits.calories}</b> </li>);

  //  //display original array
  //  const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b> </li>);


  const category = props.category;
  const itemList = props.items;

  //display original array
  const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b> </li>);





  return(<>
  <h3 className="list-category">{category}</h3>
  <ol className="list-items">{listItems}</ol>

  
  
  </>);

}
List.PropTypes ={
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({ 
    id: PropTypes.number, 
    name: PropTypes.string, 
    calories: PropTypes.number})),
}
List.defaultProps = {
  category: "category",
  items: [],
}

export default List