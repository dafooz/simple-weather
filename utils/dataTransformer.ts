import { Forecast, RawForecast } from './types';
import { getWindDirection } from './windDirection';

export const transformForecast = (raw: RawForecast): Forecast => {
  return {
    location: {
      city: raw.name,
      country: raw.sys.country
    },
    weather: {
      icon: raw.weather[0].icon,
      short: raw.weather[0].main,
      long: raw.weather[0].description
    },
    info: {
      ...raw.main
    },
    wind: {
      direction: getWindDirection(raw.wind.deg),
      speed: raw.wind.speed
    }
  };
};
