const numbersFromOneToN = (n: number): number[] => {
	return Array.from({ length: n }, (_, i) => i + 1)
}

export const pattern = (amount: number): string[] => {
	const sequense: string = numbersFromOneToN(amount).join('')

	const patterns: string[] = []

	for (let i = 0; i < amount; i++) {
		patterns.push(sequense.slice(i, amount) + sequense.slice(0, i))
	}

	return patterns
}
