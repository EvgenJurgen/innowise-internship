export const arithmeticSequenceSum = (a: number, r: number, n: number): void => {
	let sum = 0
	for (let i = 0; i < n; i++) {
		sum += a + r * i
	}
	console.log('arithmeticSequenceSum result: ', sum)
}
