import React from 'react';
import { Icon } from 'react-native-ui-kitten';
import { Text, View } from 'react-native';
import { temperatureStyles } from '../../styles/styles';
import { MinTempIcon, MaxTempIcon } from './Icons';

export const MinMaxTemp = ({ min, max }: { min: number; max: number }) => (
  <View style={temperatureStyles.minmaxContainer}>
    <MinTempIcon />
    <Text style={temperatureStyles.minmax}>{`${min}℃`}</Text>
    <Text style={temperatureStyles.minmax}>{`     `}</Text>
    <MaxTempIcon />
    <Text style={temperatureStyles.minmax}>{`${max}℃`}</Text>
  </View>
);
