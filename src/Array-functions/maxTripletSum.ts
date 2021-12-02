const onlyUnique = (value: number, index: number, array: number[]): boolean => {
	return array.indexOf(value) === index;
};

export const maxTripletSum = (arr: number[]): number => {
	const threeMaxNumbers: number[] = arr
		.sort((a, b) => b - a)
		.filter((value, index, array) => onlyUnique(value, index, array))
		.slice(0, 3);
	const sumOfThreeMaxNumbers: number = threeMaxNumbers.reduce((sum, item) => sum + item);

	return sumOfThreeMaxNumbers;
};
