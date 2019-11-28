import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

export const IconButton = ({ onPress, children }: { onPress: () => void; children: ReactNode }) => (
  <TouchableWithoutFeedback onPress={onPress}>{children}</TouchableWithoutFeedback>
);
