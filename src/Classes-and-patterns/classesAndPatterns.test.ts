import { Singleton } from './Singleton';
import './StringExtension';

describe('Classes and Patterns', () => {
	test('Singleton class', () => {
		const firstInstance = new Singleton();

		expect(new Singleton()).toBe(firstInstance);
	});

	test('String Extension', () => {
		expect('TeSt'.customUpperCase()).toBe('TEST');
	});
});
