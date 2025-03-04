//// filepath: /Users/alilholt/lilholt-cafe-site/public/src/components/Weather.jsx
import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace YOUR_API_KEY with your actual OpenWeatherMap API key.
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=19047,us&appid=d36c9ea38537624016b0271409e3ef30&units=imperial`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!weather) return <div>Loading weather...</div>;

  return (
    <div className="weather-card card">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °F</p>
      <p>Conditions: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;