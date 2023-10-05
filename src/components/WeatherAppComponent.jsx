import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherComponent from './WeatherComponent';
import WeatherContext from '../context/WeatherContext';
import { toast } from 'react-hot-toast';
import '../styles/WeatherAppComponent.scss';

function WeatherAppComponent() {
  const {
    zipcode,
    setZipcode,
    submittedZip,
    loading,
    weatherInfo,
    errorMessage,
    handleSubmit,
    setErrorMessage,
  } = useContext(WeatherContext);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { duration: 4000, icon: '👏👏👏' });
      setErrorMessage('');
    }
  }, [errorMessage, setErrorMessage]);
  return (
    <div className='app-container'>
      <div className='search-container'>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Enter zipcode...'
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className='form-control rounded-4'
            maxLength={5}
          />
          <button
            onClick={handleSubmit}
            className='btn ml-2 rounded-5'
            disabled={loading}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
        </div>
        {submittedZip ? (
          <WeatherComponent zipcode={submittedZip} weatherInfo={weatherInfo} />
        ) : (
          <div
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h2 style={{ color: '#eee' }}>Enter a zipcode to get started!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherAppComponent;
