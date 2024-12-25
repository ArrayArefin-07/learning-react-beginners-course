import profilePic from './assets/profile.jpg'

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profil picture" />
      <h2 className="card-title" >Mobasher Arefin</h2>
      <p className="card-text">
        I am a Software Enginnering Student, I make profession Websits Developer
        and i build interactive Website
      </p>
    </div>
  );
}

export default Card
