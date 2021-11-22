import { sumAverage } from './Array-functions/averageSumOfArrays'
import { maxTripletSum } from './Array-functions/sumOfThreeMaxValues'
import { biggest } from './Array-functions/sortTomaxValue'
import { pattern } from './Array-functions/shiftCombinations'
import { arithmeticSequenceSum } from './Array-functions/arithmeticSequence'

import { toMachineName } from './String-functions/machineReadableNames'
import { alphabetized } from './String-functions/alphabetization'
import { romanToNumber } from './String-functions/decodingRomanNumerals'
import { countDuplicates } from './String-functions/duplicateCounter'

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

import { Singleton } from './Classes-and-patterns/Singleton'
import './Classes-and-patterns/StringExtension'

import { sort } from './Sorting/sortedListOfObjects'

console.log('\n//////////Array-functions//////////\n')

const testArrayTask1: number[][] = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
console.log('sumAverage() result: ', sumAverage(testArrayTask1))

const testArrayTask2: number[] = [1, 2, 3, 5, 1, 9, 6, 9]
const { threeMaxNumbers, sumOfThreeMaxNumbers } = maxTripletSum(testArrayTask2)
console.log('threeMaxNumbers of maxTripletSum(): ', threeMaxNumbers)
console.log('sumOfThreeMaxNumbers of maxTripletSum(): ', sumOfThreeMaxNumbers)

const testArrayTask3: number[] = [3, 30, 34, 5, 9]
console.log('biggest() result: ', biggest(testArrayTask3))

console.log('pattern() result: ', pattern(3))

console.log('arithmeticSequenceSum() result: ', arithmeticSequenceSum(2, 3, 5))

console.log('\n//////////String-functions//////////\n')

console.log(
	'toMachineName() result: ',
	toMachineName('Lorem        ipsum sit                                 DOLOR', '-')
)

console.log('alphabetized() result: ', alphabetized('The Holy      Bible.'))

console.log('romanToNumber() result: ', romanToNumber('XVII'))

console.log('countDuplicates() result: ', countDuplicates('aabBcde'))

console.log('\n//////////Algorithms-and-functional-programming//////////\n')

flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])

const addOne = add(1)
console.log('function add(1+3) result: ', addOne(3))

const addThree = add(3)
console.log('function add(3+3) result: ', addThree(3))

console.log('multiplyAll() result: ', multiplyAll([1, 2, 3])(2))

console.log('uniqueSum() result: ', uniqueSum([-1, -1, 5, 2, -7]))

console.log(
	'reduce() result: ',
	reduce([1, 2, 3, 4], (acc: number, value: number) => (acc *= value), 1)
)

const f = (x: unknown): unknown => {
	console.log(`f returned ${x}`)
	return x
}
const g = (x: unknown): unknown => {
	console.log(`g returned ${x}`)
	return x
}
const h = (x: unknown): unknown => {
	console.log(`h returned ${x}`)
	return x
}
console.log('compose() result: ')
const composeFunction = compose(f, g, h)
composeFunction(1)

console.log('\n//////////Higher-order-functions//////////\n')

const fn = (a: number, b: number) => {
	console.log('array a+b', a + b)
}

console.log('spread() result: ')
spread(fn, [1, 2])

console.log('ZipWith() result: ', ZipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]))

console.log('\n//////////Recursion//////////\n')

console.log('sequenceSum result: ', sequenceSum(0, 10, 1))

class Node {
	data
	next
	constructor(data: unknown, next: unknown = null) {
		this.data = data
		this.next = next
	}
}

console.log(
	'stringify result: ',
	stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))
)

console.log('\n//////////Classes-and-patterns//////////\n')

const singleton1 = new Singleton()
const singleton2 = new Singleton()

console.log('Singleton Class')
console.log('singleto1 === singleto2', singleton1 === singleton2)
console.log('singleton1.name', singleton1.name)
console.log('singleton2.name', singleton2.name)

console.log('customUpperCase() result: ', 'test string'.customUpperCase())

console.log('\n//////////Sorting//////////\n')

console.log(
	'sort() by a',
	sort(
		[
			{ a: 1, b: 3 },
			{ a: 3, b: 2 },
			{ a: 2, b: 40 },
			{ a: 4, b: 12 },
		],
		'a'
	)
)

console.log(
	'sort() by b',
	sort(
		[
			{ a: 1, b: 3 },
			{ a: 3, b: 2 },
			{ a: 2, b: 40 },
			{ a: 4, b: 12 },
		],
		'b'
	)
)
