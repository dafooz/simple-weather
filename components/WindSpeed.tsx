import React from 'react';
import { View, Text } from 'react-native';
import { windSpeedStyles } from '../styles/styles';
import { WindSpeedIcon } from './base';
import { transformMStoKMH } from '../utils/dataTransformer';

export const WindSpeed = ({ direction, speed }: { direction: string; speed: number }) => (
  <View style={windSpeedStyles.container}>
    <Text>Windspeed info</Text>
  </View>
);
