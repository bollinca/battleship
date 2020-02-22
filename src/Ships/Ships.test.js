import ships from './Ships.js';

test('is connected', () => {
  expect(ships()).toBe('This is connected');
});