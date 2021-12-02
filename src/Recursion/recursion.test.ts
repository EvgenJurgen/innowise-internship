import {sequenceSum} from './sequenceSum'
import {stringify} from './stringify'


describe('Recursion', () => {
	test('sequenceSum method', () => {
		expect(sequenceSum(1,10,3)).toBe(22)
	});

    test('stringify method', () => {
        class Node {
            data;
            next;
            constructor(data: unknown, next: unknown = null) {
                this.data = data;
                this.next = next;
            }
        }

		expect(stringify(new Node(1,new Node(2,new Node(3))))).toBe('1 -> 2 -> 3 -> null')
	});
});