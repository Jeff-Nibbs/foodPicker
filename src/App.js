import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [place, setPlace] = useState();
  const [num, setNum] = useState();
  const [input, setInput] = useState(95765);

  useEffect(() => {
    getPlaces(input);
  }, [input]);

  const getPlaces = (zip) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4a78bb8468mshe968214da6b57e9p1de614jsn8fef4e3facf0",
        "X-RapidAPI-Host": "restaurants-near-me-usa.p.rapidapi.com",
      },
    };

    fetch(
      `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${zip}/0`,
      options
    )
      .then((response) => response.json())
      .then((jsonData) => setPlace(jsonData.restaurants))
      .catch((err) => console.error(err));
  };
  const getNum = () => {
    setNum(Math.floor(Math.random() * 10));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getPlaces(input);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Where do you want to eat.</h1>
        <h2>{num ? place[num].restaurantName : null}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Zip:
            <input type="number" value={input} onChange={handleChange} />
          </label>
          <input type="submit" value="Set Zip Code" className="btn" />
        </form>
        <button className="btn" onClick={getNum}>
          What do you want
        </button>
      </header>
    </div>
  );
}

export default App;
