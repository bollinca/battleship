import ships from './Ships.js';

test('returns an object', () => {
  expect(ships({length: 5, damageLocations: [1, 3]}))
      .toEqual({length: 5, damageLocations: [1, 3], isSunk: false});
});

test('isSunk returns true if entire ship damaged', () => {
  expect(ships({length: 4, damageLocations: [0, 1, 2, 3]}).isSunk)
    .toBe(true)
})