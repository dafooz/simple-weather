import React, { ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import { getBackground } from '../utils/backgrounds';
import { backgroundImageStyles } from '../styles/styles';

export const BackgroundImage = ({
  conditions,
  children,
}: {
  conditions: string;
  children: ReactNode;
}) => (
  <ImageBackground style={backgroundImageStyles.background} source={getBackground(conditions)}>
    {children}
  </ImageBackground>
);
