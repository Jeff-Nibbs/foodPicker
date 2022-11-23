import { useState } from "react";
import "./App.css";

const placesToEat = [
  "Vitality Bowls",
  "The Cheesecake Factory",
  "Fire Wings",
  "Blaze Pizza",
  "Lazy Dog",
  "Wing Stop",
  "El Charro Taqueria",
  "Bibis",
];

function App() {
  const [food, setFood] = useState("");
  const handleClick = () => {
    let num = Math.floor(Math.random() * placesToEat.length);
    setFood(placesToEat[num]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Where do you want to eat.</h1>
        {food ? <h2>{food}</h2> : null}
        <button className="btn" onClick={handleClick}>
          What do you want
        </button>
        <button
          className="btn"
          onClick={() => {
            setFood("");
          }}
        >
          Clear
        </button>
      </header>
    </div>
  );
}

export default App;
