export const arithmeticSequenceSum = (a: number, r: number, n: number): number => {
	let sum = 0;

	for (let i = 0; i < n; i++) {
		sum += a + r * i;
	}

	return sum;
};
