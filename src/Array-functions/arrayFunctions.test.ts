import { arithmeticSequenceSum } from './arithmeticSequenceSum';
import { biggest } from './biggest';
import { maxTripletSum } from './maxTripletSum';
import { pattern } from './pattern';
import { sumAverage } from './sumAverage';

describe('Array Functions', () => {
	test('arithmeticSequenceSum method', () => {
		expect(arithmeticSequenceSum(2, 3, 5)).toBe(40);
	});

	test('biggest method', () => {
		expect(biggest([3, 30, 34, 5, 9])).toBe('9534330');
	});

	test('maxTripletSum method', () => {
		expect(maxTripletSum([3, 2, 6, 8, 2, 3])).toBe(17);
	});

	test('pattern method', () => {
		expect(pattern(3)).toEqual(expect.arrayContaining(['123', '231', '312']));
	});

	test('sumAverage method', () => {
		expect(
			sumAverage([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			])
		).toBe(15);
	});
});
