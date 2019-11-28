const windDirections = [
  'N',
  'N-NE',
  'NE',
  'E-NE',
  'E',
  'E-SE',
  'SE',
  'S-SE',
  'S',
  'S-SW',
  'SW',
  'W-SW',
  'W',
  'W-NW',
  'NW',
  'N-NW'
];

export const getWindDirection = (degrees: number) =>
  windDirections[Math.round(degrees / 22.5)];
