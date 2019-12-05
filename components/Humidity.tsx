import React from 'react';
import { View, Text } from 'react-native';
import { HumidityIcon } from './base';
import { humidityStyles } from '../styles/styles';

export const Humidity = ({ humidity }: { humidity: number }) => (
  <View style={humidityStyles.container}>
    <HumidityIcon />
    <Text style={humidityStyles.text}>{`${humidity}%`}</Text>
  </View>
);
