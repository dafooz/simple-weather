import React from 'react';

import { ActivityIndicator, SafeAreaView, View } from 'react-native';

import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';

import { light as lightTheme, mapping } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { useForecast } from './hooks/useForecast';
import { BackgroundImage, WeatherDisplay, LastRefreshTime } from './components';
import { appStyles } from './styles/styles';

export default function App() {
  const { forecast, loading, refreshWeather, lastRefresh } = useForecast();

  return (
    <>
      {/* Add the icon registry to have access to all the EvaIcons. Available icons: https://akveo.github.io/eva-icons/#/*/}
      <IconRegistry icons={EvaIconsPack} />
      {/* Application provider for UI Kitten. See https://akveo.github.io/react-native-ui-kitten/ */}
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <BackgroundImage conditions={forecast && forecast.weather ? forecast.weather.icon : 'none'}>
          <View style={appStyles.container}>
            {/* If the application is loading, show the device loader */}
            {loading && <ActivityIndicator size="large" color="#FFF" />}
            {/* if the data are loaded, show the app */}
            {!loading && forecast && (
              <View style={appStyles.globalContainer}>
                <SafeAreaView style={appStyles.safearea}>
                  <WeatherDisplay forecast={forecast} refresh={refreshWeather} />
                  <View style={{ alignItems: 'center' }}>
                    <LastRefreshTime lastRefresh={lastRefresh} />
                  </View>
                </SafeAreaView>
              </View>
            )}
          </View>
        </BackgroundImage>
      </ApplicationProvider>
    </>
  );
}
