import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-ui-kitten';

export const Temperature = ({
  temp,
  temp_min,
  temp_max,
}: {
  temp: number;
  temp_max: number;
  temp_min: number;
}) => (
  <View style={styles.container}>
    <View style={styles.tempContainer}>
      <Text style={styles.currentTemp}>{`${temp}℃`}</Text>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Icon name="thermometer-minus-outline" width={20} height={20} fill="#1a73e8" />
      <Text style={styles.minmax}>{`${temp_min}℃`}</Text>
      <Text style={styles.minmax}>{`     `}</Text>
      <Icon name="thermometer-plus-outline" width={20} height={20} fill="#f44336" />
      <Text style={styles.minmax}>{`${temp_max}℃`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 15,
    flexGrow: 2,
  },
  tempContainer: {
    width: '100%',
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  currentTemp: {
    fontSize: 50,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  minmax: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});
