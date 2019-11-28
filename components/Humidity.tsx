import React from 'react';
import { View, Text } from 'react-native';
import { HumidityIcon } from './base';
import { humidityStyles } from '../styles/styles';

export const Humidity = ({ humidity }: { humidity: number }) => (
  <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center' }}>
    <HumidityIcon />
    <Text style={humidityStyles.text}>{`${humidity}%`}</Text>
  </View>
);
