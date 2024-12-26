

function ProfilePicture(){

  const  imageUrl = './src/assets/profile.jpg';

  // const handleClick = () => console.log("OUCH🤔");
  const handleClick = (e) => e.target.style.display = "none";

  return(
    <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    // <img onClick={handleClick} src={imageUrl}></img>
    // <img src="./assets/profile.jpg"> </img>
  )

}
export default ProfilePicture