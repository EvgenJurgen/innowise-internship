import { add } from './add';
import { compose } from './compose';
import { flattenAndSort } from './flattenAndSort';
import { multiplyAll } from './multiplyAll';
import { reduce } from './reduce';
import { uniqueSum } from './uniqueSum';

describe('Algorithms And Functional Programming', () => {
	test('add method', () => {
		expect(add(2)(3)).toBe(5);
	});

	// test('compose method', () => {
	//     const f1 =(x:number)=>x+1;
	//     const f2 =(x:number)=>x*5;
	//     const composeFunction = compose(f1,f2)
	// 	expect(composeFunction(5)).toBe(26);
	// });

	test('flattenAndSort method', () => {
		expect(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).toEqual(
			expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9])
		);
	});

	test('multiplyAll method', () => {
		expect(multiplyAll([1, 2, 3])(2)).toEqual(expect.arrayContaining([2, 4, 6]));
	});

	test('reduce method', () => {
		expect(
			reduce(
				['H', 'e', 'l', 'l', 'o'],
				(acc: { [x: string]: any }, value: any, index: number) => {
					acc[`${index + 1}`] = value;
					return acc;
				},
				{}
			)
		).toEqual(expect.objectContaining({ 1: 'H', 2: 'e', 3: 'l', 4: 'l', 5: 'o' }));
	});

	test('uniqueSum method', () => {
		expect(uniqueSum([2, 5, 6, 2, 2, 2, 5, -2, 5])).toBe(11);
		expect(uniqueSum([])).toBe(0);
	});
});
