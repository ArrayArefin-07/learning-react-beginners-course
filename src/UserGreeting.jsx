

function UserGreeting(props){
  //if else statement
  // if(props.isLoggedIn){
  //   return <h2>Welcome {props.username}</h2>
  // }
  // else{
  //   return <h2>Please Login to Continue</h2>
  // }

  //using ternary operator
  return props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please Login to Continue</h2>
}
export default UserGreeting