import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';
import { WiHumidity, WiDayWindy } from 'react-icons/wi';
import '../styles/WeatherComponent.scss';

function WeatherComponent() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      {weatherData ? (
        <div className='weather-container'>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt='weather icon'
          />
          <h4 className='big'>{Math.round(weatherData.main.temp)}°F</h4>
          <h4 className='medium'>{weatherData.name}</h4>
          <div className='weather-details'>
            <div className='humidity'>
              <div>
                <WiHumidity />
                <span>{Math.round(weatherData.main.humidity)}%</span>
              </div>
              <p>Humidity</p>
            </div>
            <div className='feels-like'>
              <div>
                <WiDayWindy />
                <span>{Math.round(weatherData.main.feels_like)} °F</span>
              </div>
              <p>Feels Like</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherComponent;
