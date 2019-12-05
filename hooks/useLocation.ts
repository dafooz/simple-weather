import * as Location from 'expo-location';
import { askAsync, LOCATION } from 'expo-permissions';
import { LocationData } from 'expo-location';
import { useEffect, useState } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState<LocationData>(undefined);
  const [error, setError] = useState<string>(undefined);
  const [lastRefresh, setLastRefresh] = useState<number>(Date.now());
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    const { status } = await askAsync(LOCATION);
    if (status !== 'granted') {
      setError('Permission to access location was denied');
    }

    const location = await Location.getCurrentPositionAsync({});
    setLastRefresh(Date.now);
    setLocation({ ...location });
  };

  const refresh = () => {
    getLocationAsync();
  };

  return {
    refresh,
    lastRefresh,
    refreshing,
    setRefreshing,
    location,
    error,
  };
};
