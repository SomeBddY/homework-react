import React, {useState} from 'react';
import './App.css';
import LocationData from './components/LocationData.js'

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [visibility, setVisibility] = useState(false)

  const logInfo = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=27246259aabc1b11ce70b1b84bb09bf4`)
    .then((response) => response.json())
    .then((currData) => {
      setData((data=> [...data, currData]));
      setLocations((locations) => [...locations, location]);
    });
  }

  const ShowHide = () => {
    if(visibility === false){
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }

  return (
    <React.Fragment>
      <form className="weather-form">
        <label>Choose a location</label>
        <input id="location-input"
               type="text"
               onChange={(e) => setLocation(e.target.value)} />
        <button id="submit-btn" type="button" onClick={logInfo}>SUBMIT</button>
      </form>
      <div className="container">
        {locations.map((singleLocation, index) => {
          if(locations !== null) {
            return (
              <React.Fragment key={index}>
                <span>
                  <button onClick={ShowHide}>{singleLocation}</button>
                  {visibility && <LocationData Info={data[index]} />}
                </span>
              </React.Fragment>
            )
          }
          return null;
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
