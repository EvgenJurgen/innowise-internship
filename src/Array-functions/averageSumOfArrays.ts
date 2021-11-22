export const sumAverage = (array: number[][]): number => {
	const arithmeticMeanArray: number[] = array.map(
		(arr) => arr.reduce((sum, item) => sum + item) / arr.length
	)

	const sumArithmeticMeans: number = arithmeticMeanArray.reduce((sum, item) => sum + item)

	const averagedSum: number = Math.floor(sumArithmeticMeans)

	return averagedSum
}
