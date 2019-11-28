import React from 'react';

import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { ApplicationProvider, IconRegistry, Layout } from 'react-native-ui-kitten';

import { light as lightTheme, mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { useForecast } from './hooks/useForecast';
import { BackgroundImage, WeatherDisplay } from './components';

export default function App() {
  const { forecast, loading, refreshWeather, lastRefresh, setRefreshing } = useForecast();

  return (
    <>
      {/* Add the icon registry to have access to all the EvaIcons. Available icons: https://akveo.github.io/eva-icons/#/*/}
      <IconRegistry icons={EvaIconsPack} />
      {/* Application rpovider for UI Kitten. See https://akveo.github.io/react-native-ui-kitten/ */}
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <BackgroundImage condition={forecast && forecast.weather ? forecast.weather.icon : 'none'}>
          <Layout style={styles.container}>
            {loading && <ActivityIndicator size="large" color="#FFF" />}
            {!loading && forecast && (
              <View style={styles.globalContainer}>
                <SafeAreaView style={styles.safearea}>
                  <WeatherDisplay
                    forecast={forecast}
                    refresh={refreshWeather}
                    setRefreshing={setRefreshing}
                  />
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 10 }}>{`Last refresh: ${new Date(
                      lastRefresh,
                    ).toLocaleString()}`}</Text>
                  </View>
                </SafeAreaView>
              </View>
            )}
          </Layout>
        </BackgroundImage>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  safearea: {
    flex: 1,
    width: '100%',
  },
});
