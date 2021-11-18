export const uniqueSum = (array: number[]) => {
	if (array.length === 0) {
		return 0
	}

	const sortedArray = array.sort((a, b) => a - b)

	let last = sortedArray[0]
	let sum = sortedArray[0]

	for (let i = 0; i < sortedArray.length; i++) {
		if (last === sortedArray[i]) {
			continue
		} else {
			sum += sortedArray[i]
			last = sortedArray[i]
		}
	}

	return sum
}
