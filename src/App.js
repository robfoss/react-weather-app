import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import WeatherAppComponent from './components/WeatherAppComponent';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <WeatherAppComponent />
      <Toaster />
    </WeatherProvider>
  );
}

export default App;
