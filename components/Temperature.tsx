import React from 'react';
import { View, Text } from 'react-native';

import { temperatureStyles } from '../styles/styles';

import { MinMaxTemp } from './base';

export const Temperature = ({
  temp,
  temp_min,
  temp_max,
}: {
  temp: number;
  temp_max: number;
  temp_min: number;
}) => (
  <View style={temperatureStyles.container}>
    <Text>Temperature</Text>
  </View>
);
