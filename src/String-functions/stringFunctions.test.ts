import { alphabetized } from './alphabetized';
import { countDuplicates } from './countDuplicates';
import { romanToNumber } from './romanToNumber';
import { toMachineName } from './toMachineName';

describe('String Functions', () => {
	test('alphabetized method', () => {
		expect(alphabetized('The Holy      Bible.')).toBe('BbeehHilloTy');
		expect(alphabetized('? ! .')).toBe('');
	});

	test('countDuplicates method', () => {
		expect(countDuplicates('Tratatatata')).toBe(2);
	});

    test('romanToNumber method', () => {
		expect(romanToNumber('MCMXCIX')).toBe(1999);
		expect(romanToNumber('A')).toBe(NaN);
	});

    test('toMachineName method', () => {
		expect(toMachineName('3 basics and 1 advance','-')).toBe('basics-and-1-advance');
	});
});
