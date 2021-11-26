export const flattenAndSort = (arr: number[][]): number[] => {
	return arr.reduce((array, item) => array.concat(item)).sort((a, b) => a - b);
};
