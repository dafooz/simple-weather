import React from 'react';
import { View, Text, Image } from 'react-native';

export const WindSpeed = ({ direction, speed }: { direction: string; speed: number }) => (
  <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center' }}>
    <Image source={require('../assets/icons/wind.png')} style={{ width: 25, height: 25 }} />
    <Text
      style={{
        marginLeft: 20,
        fontSize: 20,
      }}
    >{`${direction} @ ${Math.round(speed * 3.6 * 100) / 100} km/h`}</Text>
  </View>
);
