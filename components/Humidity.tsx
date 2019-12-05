import React from 'react';
import { View, Text } from 'react-native';
import { HumidityIcon } from './base';
import { humidityStyles } from '../styles/styles';

export const Humidity = ({ humidity }: { humidity: number }) => (
  <View style={humidityStyles.container}>
    <Text>Humidity info</Text>
  </View>
);
