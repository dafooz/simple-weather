import React from 'react';
import { Text } from 'react-native';

export const LastRefreshTime = ({ lastRefresh }: { lastRefresh: number }) => (
  <Text style={{ fontSize: 10 }}>{`Last refresh: ${new Date(lastRefresh).toLocaleString()}`}</Text>
);
