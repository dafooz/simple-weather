import React from 'react';

import { View, Text } from 'react-native';
import { WeatherIcon } from './base';
import { currentWeatherStyles } from '../styles/styles';

export const CurrentWeather = ({
  weather: { icon, short, long },
}: {
  weather: {
    icon: string;
    short: string;
    long: string;
  };
}) => (
  <View style={currentWeatherStyles.container}>
   <Text>Current Weather</Text>
  </View>
);
