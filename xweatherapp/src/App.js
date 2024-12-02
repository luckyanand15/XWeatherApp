import { useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    setIsLoading(true);
    const url = `https://api.weatherapi.com/v1/current.json?key=4471d819cffb48f2ac9153325240212&q=${city}`;
    try {
      const response = await axios.get(url);
      setWeather(response.data.current);
    } catch (err) {
      setWeather(null);
      alert("Failed to fetch weather data");
    }
    setIsLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setWeather(null);
    const cityLowerCase = city.toLowerCase();
    getWeather(cityLowerCase);
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {isLoading && <p>Loading data...</p>}
      <div className="container">
        {weather && (
          <div className="weather-cards">
          <Card title={"Temperature"} details={weather.temp_c} unit={"°C"} />
          <Card title={"Humidity"} details={weather.humidity} unit={"%"} />
          <Card title={"Condition"} details={weather.condition.text} unit={""} />
          <Card title={"Wind Speed"} details={weather.wind_kph} unit={" kph"} />
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
