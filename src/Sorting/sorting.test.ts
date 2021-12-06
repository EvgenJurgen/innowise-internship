import { sort } from './sort';

describe('Sorting', () => {
	test('sort method', () => {
		expect(
			sort(
				[
					{ a: 1, b: 3 },
					{ a: 3, b: 2 },
					{ a: 2, b: 40 },
					{ a: 4, b: 12 },
				],
				'a'
			)
		).toEqual(
			expect.arrayContaining([
				{ a: 1, b: 3 },
				{ a: 2, b: 40 },
				{ a: 3, b: 2 },
				{ a: 4, b: 12 },
			])
		);

		expect(() =>
			sort(
				[
					{ a: 1, b: 3 },
					{ a: 3, b: 2 },
					{ c: 2, b: 40 },
					{ a: 4, b: 12 },
				],
				'a'
			)
		).toThrow('The object does not have such a key');
	});
});
