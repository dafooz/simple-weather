import React from 'react';
import { Icon, Text } from 'react-native-ui-kitten';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

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
    <View style={{ flexDirection: 'row', flexGrow: 1 }}>
      <View style={styles.container}>
        <View>
          <Icon name="pin-outline" width={20} height={20} fill="#000" />
        </View>
        <View>
          <Text style={styles.text}>{`${city}, ${country}`}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <TouchableWithoutFeedback onPress={refresh}>
          <Icon name="refresh-outline" width={20} height={20} fill="#000" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 10,
  },
  text: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
  },
});
