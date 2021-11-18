export const arithmeticSequenceSum = (a: number, r: number, n: number): void => {
	const sum: number = ((2 * a + r * (n - 1)) / 2) * n
	console.log('arithmeticSequenceSum result: ', sum)
}
