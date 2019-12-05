import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

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
}) => (
  <View style={weatherDisplayStyles.container}>
    <Text>Main app screen</Text>
  </View>
);
