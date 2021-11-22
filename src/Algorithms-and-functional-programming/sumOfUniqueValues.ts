const onlyUnique = (value: number, index: number, array: number[]): boolean => {
	return array.indexOf(value) === index
}

export const uniqueSum = (array: number[]): number => {
	if (array.length === 0) {
		return 0
	}

	return array
		.filter((value, index, array) => onlyUnique(value, index, array))
		.reduce((sum, item) => sum + item)
}
