import profilePic from './assets/profile.jpg'

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profil picture" />
      <h2>Mobasher Arefin</h2>
      <p>
        I am a Software Enginnering Student, I make profession Websits Developer
        and i build interactive Website
      </p>
    </div>
  );
}

export default Card
