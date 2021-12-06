export const sumAverage = (array: number[][]): number => {
	return Math.floor(
		array.reduce(
			(value: number, itemArray) =>
				value +
				itemArray.reduce((average: number, item: number) => average + item / itemArray.length, 0),
			0
		)
	);
};
