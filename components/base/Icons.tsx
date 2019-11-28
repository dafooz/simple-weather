import React from 'react';
import { humidityIcon } from '../../utils/icons';
import { Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-ui-kitten';

export const HumidityIcon = () => <Image source={humidityIcon} style={styles.humidity} />;
export const WeatherIcon = ({ icon }: { icon: string }) => (
  <Image
    style={styles.weatherIcon}
    source={{
      uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    }}
  />
);
export const WindSpeedIcon = () => (
  <Image source={require('../../assets/icons/wind.png')} style={styles.windSpeedIcon} />
);
export const LocationIcon = () => <Icon name="pin-outline" width={20} height={20} fill="#000" />;
export const RefreshIcon = () => <Icon name="refresh-outline" width={20} height={20} fill="#000" />;
export const MinTempIcon = () => (
  <Icon name="thermometer-minus-outline" width={20} height={20} fill="#1a73e8" />
);
export const MaxTempIcon = () => (
  <Icon name="thermometer-plus-outline" width={20} height={20} fill="#f44336" />
);

const styles = StyleSheet.create({
  humidity: { width: 25, height: 25 },
  weatherIcon: {
    width: 180,
    height: 180,
  },
  windSpeedIcon: { width: 25, height: 25 },
});
