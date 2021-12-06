
export const maxTripletSum = (arr: number[]): number => {
	const threeMaxNumbers: number[] = arr
		.sort((a, b) => b - a)
		.reduce((result, item) => {
			if (!result.includes(item)) {
				result.push(item);
			}
			return result;
		}, [])
		.slice(0, 3);
	const sumOfThreeMaxNumbers: number = threeMaxNumbers.reduce((sum, item) => sum + item);

	return sumOfThreeMaxNumbers;
};
