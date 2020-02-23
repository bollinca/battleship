import ships from './Ships.js';

test('returns an object with length', () => {
  expect(ships({length: 5, damageLocations: [1, 3]}).length)
      .toEqual(5);
});

test('returns an object with damage locations', () => {
  expect(ships({length: 5, damageLocations: [1, 3]}).damageLocations)
      .toEqual([1, 3]);
});

test('isSunk returns true if entire ship damaged', () => {
  expect(ships({length: 4, damageLocations: [0, 1, 2, 3]}).isSunk)
    .toBe(true)
})

test('hit() adds hit section to damageLocations', () => {
  expect((ships({length: 3, damageLocations: [1]}).hit(2)).damageLocations)
    .toEqual([1, 2])
})

test('hit() updates isSunk to true when damaging final location', () => {
  expect(ships({length: 3, damageLocations: [1, 3]}).hit(2).isSunk)
    .toBe(true);
})
