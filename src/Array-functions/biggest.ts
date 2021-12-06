export const biggest = (numbersArray: number[]): string => {
	const sortedNumbersArray: string = numbersArray
		.sort((a, b) => `${b}${a}`.localeCompare(`${a}${b}`))
		.join('');

	return sortedNumbersArray;
};
