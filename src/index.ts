import { sumAverage } from './Array-functions/averageSumOfArrays'
import { maxTripletSum } from './Array-functions/sumOfThreeMaxValues'
import { biggest } from './Array-functions/sortTomaxValue'
import { pattern } from './Array-functions/shiftCombinations'
import { arithmeticSequenceSum } from './Array-functions/arithmeticSequence'

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
