const outputNumbersArrayFromInterval = (start: number, end: number): number[] => {
	const interval: number[] = []

	for (let i = start; i <= end; i++) {
		interval.push(i)
	}

	return interval
}

const arrayToString = (array: number[]): string => {
	return array.join('')
}

export const pattern = (amount: number): void => {
	const interval: number[] = outputNumbersArrayFromInterval(1, amount)

	const patterns: string[] = []

	let i = 0

	while (i < interval.length) {
		patterns.push(arrayToString(interval))
		interval.push(interval.shift())
		i++
	}

	console.log('pattern result: ', patterns)
}
