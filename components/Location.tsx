import React from 'react';
import { View } from 'react-native';
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
}) => {
  return (
    <View style={locationStyles.mainContainer}>
      <View style={locationStyles.container}>
        <View>
          <LocationIcon />
        </View>
        <View>
          <LocationText city={city} country={country} />
        </View>
      </View>
      <View style={locationStyles.refreshButton}>
        <IconButton onPress={refresh}>
          <RefreshIcon />
        </IconButton>
      </View>
    </View>
  );
};
