import React from 'react';
import { Text } from 'react-native';
import { locationStyles } from '../../styles/styles';

export const LocationText = ({ city, country }: { city: string; country: string }) => (
  <Text style={locationStyles.text}>{`${city}, ${country}`}</Text>
);
