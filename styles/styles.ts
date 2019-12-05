import { StyleSheet } from 'react-native';

export const backgroundImageStyles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const currentWeatherStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
  },
  short: {
    marginTop: 10,
    fontSize: 50,
    textAlign: 'center',
    color: '#000',
    textTransform: 'capitalize',
  },
  long: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    textTransform: 'capitalize',
  },
});

export const humidityStyles = StyleSheet.create({
  container: { flexGrow: 1, flexDirection: 'row', alignItems: 'center' },
  text: {
    marginLeft: 20,
    fontSize: 20,
  },
});

export const locationStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
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
  refreshButton: { alignItems: 'flex-end', justifyContent: 'center' },
});

export const temperatureStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 15,
    flexGrow: 2,
  },
  tempContainer: {
    width: '100%',
  },
  currentTemp: {
    fontSize: 50,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  minmaxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minmax: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});

export const weatherDisplayStyles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
});

export const windSpeedStyles = StyleSheet.create({
  container: { flexGrow: 1, flexDirection: 'row', alignItems: 'center' },
  text: {
    marginLeft: 20,
    fontSize: 20,
  },
});

export const appStyles = StyleSheet.create({
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
