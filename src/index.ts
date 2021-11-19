import { sumAverage } from './Array-functions/averageSumOfArrays'
import { maxTripletSum } from './Array-functions/sumOfThreeMaxValues'
import { biggest } from './Array-functions/sortTomaxValue'
import { pattern } from './Array-functions/shiftCombinations'
import { arithmeticSequenceSum } from './Array-functions/arithmeticSequence'
import { flattenAndSort } from './Algorithms-and-functional-programming/flattenAndSortingAnArray'
import { add } from './Algorithms-and-functional-programming/functionalAddition'
import { multiplyAll } from './Algorithms-and-functional-programming/multiplicationOfAllArrayElements'
import { uniqueSum } from './Algorithms-and-functional-programming/sumOfUniqueValues'
import { reduce } from './Algorithms-and-functional-programming/resuce'
import { compose } from './Algorithms-and-functional-programming/functionalComposition'
import { spread } from './Higher-order-functions/unpackingArguments'
import { ZipWith } from './Higher-order-functions/ZipWith'
import { sequenceSum } from './Recursion/sumOfSequence'
import { stringify } from './Recursion/linkedListInRow'

const testArrayTask1: number[][] = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
sumAverage(testArrayTask1)

const testArrayTask2: number[] = [1, 2, 3, 5, 1, 9, 6, 9]
maxTripletSum(testArrayTask2)

const testArrayTask3: number[] = [3, 30, 34, 5, 9]
biggest(testArrayTask3)

pattern(3)

arithmeticSequenceSum(2, 3, 5)

flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])

const addOne = add(1)
console.log('function add(1+3) result: ', addOne(3))

const addThree = add(3)
console.log('function add(3+3) result: ', addThree(3))

console.log('multiplyAll result: ', multiplyAll([1, 2, 3])(2))

console.log('uniqueSum', uniqueSum([-1, -1, 5, 2, -7]))

console.log(
	'reduce result: ',
	reduce([1, 2, 3, 4], (acc: number, value: number) => (acc *= value), 1)
)

const f = (x: unknown) => {
	console.log(`f returned ${x}`)
	return x
}
const g = (x: unknown) => {
	console.log(`g returned ${x}`)
	return x
}
const h = (x: unknown) => {
	console.log(`h returned ${x}`)
	return x
}

const composeFunction = compose(f, g, h)
composeFunction(1)

const fn = (a: number, b: number) => {
	console.log('array a+b', a + b)
}

spread(fn, [1, 2])

ZipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])

console.log('sequenceSum result: ', sequenceSum(0, 10, 1))

class Node {
	data
	next
	constructor(data: unknown, next: unknown = null) {
		this.data = data
		this.next = next
	}
}

console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))))
