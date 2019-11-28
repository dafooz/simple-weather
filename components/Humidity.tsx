import React from 'react';
import { View, Text, Image } from 'react-native';

export const Humidity = ({ humidity }: { humidity: number }) => (
  <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center' }}>
    <Image source={require('../assets/icons/humidity.png')} style={{ width: 25, height: 25 }} />
    <Text
      style={{
        marginLeft: 20,
        fontSize: 20,
      }}
    >{`${humidity}%`}</Text>
  </View>
);
