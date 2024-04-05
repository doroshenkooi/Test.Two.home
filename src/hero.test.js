import { sortHeroes } from './hero';

test('Sort heroes by health in descending order', () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

  const sortedHeroes = sortHeroes(heroes);

  expect(sortedHeroes).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});

test('Empty array should return an empty array', () => {
  const heroes = [];

  const sortedHeroes = sortHeroes(heroes);

  expect(sortedHeroes).toEqual([]);
});
