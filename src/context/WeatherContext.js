import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [zipcode, setZipcode] = useState('');
  const [submittedZip, setSubmittedZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const geoResponse = await axios.get(
          `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );

        if (geoResponse.data.cod && geoResponse.data.cod !== 200) {
          setErrorMessage(
            geoResponse.data.message || 'Error fetching weather data.'
          );
          setLoading(false);

          return;
        }

        const { lat, lon } = geoResponse.data;
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );

        if (weatherResponse.data.cod && weatherResponse.data.cod !== 200) {
          setErrorMessage(
            weatherResponse.data.message || 'Error fetching weather data.'
          );
          setLoading(false);

          return;
        }

        setWeatherData(weatherResponse.data);
      } catch (error) {
        console.error('Error fetching weather data: ', error);
        setErrorMessage(
          'An unexpected error occurred. Is this a real zip code?'
        );
      }
      setLoading(false);
    };

    if (submittedZip && submittedZip.length === 5) {
      getWeather();
    }
  }, [submittedZip]);

  const handleSubmit = () => {
    setLoading(true);
    if (!zipcode || zipcode.length !== 5) {
      setErrorMessage('Please enter a proper zip code.');
      setLoading(false);
      setZipcode('');
      return;
    }
    try {
      setSubmittedZip(zipcode);
    } catch (error) {
      console.error('Error submitting zipcode: ', error);
    }
    setLoading(false);
  };

  return (
    <WeatherContext.Provider
      value={{
        zipcode,
        setZipcode,
        submittedZip,
        setSubmittedZip,
        loading,
        setLoading,
        weatherInfo,
        setWeatherInfo,
        errorMessage,
        setErrorMessage,
        handleSubmit,
        weatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
