import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

export const CurrentWeather = ({
  weather: { icon, short, long },
}: {
  weather: {
    icon: string;
    short: string;
    long: string;
  };
}) => (
  <View style={styles.container}>
    <View>
      <Image
        style={styles.weatherIcon}
        source={{
          uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        }}
      />
    </View>
    <View>
      <Text style={styles.short}>{short}</Text>
      <Text style={styles.long}>{long}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
  },
  weatherIcon: {
    width: 180,
    height: 180,
  },
  short: {
    marginTop: 10,
    fontSize: 50,
    textAlign: 'center',
    color: '#000',
    textTransform: 'capitalize',
  },
  long: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    textTransform: 'capitalize',
  },
});
