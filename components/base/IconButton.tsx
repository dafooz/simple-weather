import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

export const IconButton = ({ onPress, children }: { onPress: () => void; children: ReactNode }) => (
  <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
);
