import messi from "./assets/messi.jpg";


function Card() {
    return (
        <div className="card">
            <img src={messi} alt="Profile" className="card-image"/>
            <h2 className="card-title">Aron Code</h2>
            <p className="card-text">I am a Student and Software Engineer.</p>
        </div>
    );
}

export default Card;