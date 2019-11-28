import React, { ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import {
  background,
  background_01d,
  background_01n,
  background_02d,
  background_02n,
  background_03n,
  background_03d,
  background_04d,
  background_04n,
  background_09d,
  background_09n,
  background_10d,
  background_10n,
  background_11d,
  background_11n,
  background_13d,
  background_13n,
  background_50d,
  background_50n,
} from '../utils/backgrounds';
export const BackgroundImage = ({
  condition,
  children,
}: {
  condition: string;
  children: ReactNode;
}) => {
  // const background = require(`../assets/background.jpg`);
  // let backgroundURI = `../assets/background.jpg`;
  // if (condition !== 'none') {
  //   backgroundURI = `../assets/background-${condition}.jpg`;
  // }
  const getBackground = (conditions: string) => {
    switch (conditions) {
      case '01d':
        return background_01d;
      case '01n':
        return background_01n;
      case '02d':
        return background_02d;
      case '02n':
        return background_02n;
      case '03d':
        return background_03d;
      case '03n':
        return background_03n;
      case '04d':
        return background_04d;
      case '04n':
        return background_04n;
      case '09d':
        return background_09d;
      case '09n':
        return background_09n;
      case '10d':
        return background_10d;
      case '10n':
        return background_10n;
      case '11d':
        return background_11d;
      case '11n':
        return background_11n;
      case '13d':
        return background_13d;
      case '13n':
        return background_13n;
      case '50d':
        return background_50d;
      case '50n':
        return background_50n;
      default:
        return background;
    }
  };

  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={getBackground(condition)}
    >
      {children}
    </ImageBackground>
  );
};
