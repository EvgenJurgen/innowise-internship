import { ZipWith } from './ZipWith';
import { spread } from './spread';

describe('Higher Order Functions', () => {
	test('ZipWith method', () => {
		expect(ZipWith(Math.pow, [1, 2, 3], [0, 2, 1])).toEqual(expect.arrayContaining([1, 4, 3]));
	});

	test('spread method', () => {
		const fn = (word1: string, word2: string) => `${word1}, ${word2}`;
		expect(spread(fn,['Hello', 'World'])).toBe('Hello, World');
	});
});
