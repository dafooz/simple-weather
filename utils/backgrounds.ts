const background = require(`../assets/backgrounds/background.jpg`);
const background_01d = require(`../assets/backgrounds/background-01d.jpg`);
const background_01n = require(`../assets/backgrounds/background-01n.jpg`);
const background_02d = require(`../assets/backgrounds/background-02d.jpg`);
const background_02n = require(`../assets/backgrounds/background-02n.jpg`);
const background_03d = require(`../assets/backgrounds/background-03d.jpg`);
const background_03n = require(`../assets/backgrounds/background-03n.jpg`);
const background_04d = require(`../assets/backgrounds/background-04d.jpg`);
const background_04n = require(`../assets/backgrounds/background-04n.jpg`);
const background_09d = require(`../assets/backgrounds/background-09d.jpg`);
const background_09n = require(`../assets/backgrounds/background-09n.jpg`);
const background_10d = require(`../assets/backgrounds/background-10d.jpg`);
const background_10n = require(`../assets/backgrounds/background-10n.jpg`);
const background_11d = require(`../assets/backgrounds/background-11d.jpg`);
const background_11n = require(`../assets/backgrounds/background-11n.jpg`);
const background_13d = require(`../assets/backgrounds/background-13d.jpg`);
const background_13n = require(`../assets/backgrounds/background-13n.jpg`);
const background_50d = require(`../assets/backgrounds/background-50d.jpg`);
const background_50n = require(`../assets/backgrounds/background-50n.jpg`);

export const getBackground = (conditions: string) => {
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
