import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Forecast } from '../utils/types';

import { Location } from './Location';
import { CurrentWeather } from './CurrentWeather';
import { Temperature } from './Temperature';
import { Humidity } from './Humidity';
import { WindSpeed } from './WindSpeed';
import { weatherDisplayStyles } from '../styles/styles';

export const WeatherDisplay = ({
  forecast: { location, weather, wind, info },
  refresh,
}: {
  forecast: Forecast;
  refresh: () => void;
  setRefreshing: (refreshing: boolean) => void;
}) => (
  <View style={weatherDisplayStyles.container}>
    <Location city={location.city} country={location.country} refresh={refresh} />
    <CurrentWeather weather={weather} />
    <Temperature temp={info.temp} temp_min={info.temp_min} temp_max={info.temp_max} />
    <Humidity humidity={info.humidity} />
    <WindSpeed direction={wind.direction} speed={wind.speed} />
  </View>
);
