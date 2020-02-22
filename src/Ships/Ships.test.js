import ships from './Ships.js';

test('returns an object', () => {
  expect(ships({length: 5, damageLocations: [1, 3], isSunk: false}))
      .toEqual({length: 5, damageLocations: [1, 3], isSunk: false});
});
