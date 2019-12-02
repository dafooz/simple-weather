import { Forecast } from '../utils/types';
import { transformForecast } from '../utils/dataTransformer';
import { useEffect, useState } from 'react';
import { useLocation } from './useLocation';
import { API_KEY } from '../api_key';

export const useForecast = () => {
  const [forecast, setForecast] = useState<Forecast>(undefined);
  const [loading, setLoading] = useState(true);
  const {
    refresh,
    lastRefresh,
    refreshing,
    setRefreshing,
    location,
    error: locationError,
  } = useLocation();

  useEffect(() => {
    if (!refreshing) {
      setLoading(true);
    }
    if (location !== undefined) {
      getWeather(location.coords.latitude, location.coords.longitude);
    }
  }, [location, locationError]);

  const getWeather = async (latitude: number, longitude: number) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

    const forecast = transformForecast(await fetch(url).then(forecast => forecast.json()));
    setForecast(forecast);
    setLoading(false);
    setRefreshing(false);
  };

  const refreshWeather = () => {
    setRefreshing(true);
    refresh();
  };

  return {
    forecast,
    locationError,
    loading,
    refreshWeather,
    lastRefresh,
    refreshing,
  };
};
