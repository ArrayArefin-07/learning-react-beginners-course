// import Header from "./Header"
// import Footer from "./Footer";
// import Food from "./Food";
// import Card from "./Card";
// import Button from "./Button/Button";
import Student from "./Student";

// function App() {
//   return(
//     // <Header></Header>
//     // <Header/> //ShortHand Way
//     <>
//     <Header/>
//     <Food/>
//     <Footer/>
//     </>

//   );
// }

// function App() {
//   return (
//     <>
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </>
//   );
// }

// function App(){
//   return(
//     <>
//     <Button />
//     </>
//   )
// }

function App(){
  return(
    <>
    <Student name="Arefin" age={30} isStudent={true} />
    <Student name="Talha" age={24} isStudent={false} />
    <Student name="Siyam" age={52} isStudent={false} />
    <Student name="Mahi" age={20} isStudent={true} />
    </>

  )
}



export default App;
