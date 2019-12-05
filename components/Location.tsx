import React from 'react';
import { View, Text } from 'react-native';
import { locationStyles } from '../styles/styles';
import { LocationIcon, RefreshIcon, LocationText, IconButton } from './base';

export const Location = ({
  city,
  country,
  refresh,
}: {
  city: string;
  country: string;
  refresh: () => void;
}) => (
  <View style={locationStyles.mainContainer}>
    <Text>User location</Text>
  </View>
);
