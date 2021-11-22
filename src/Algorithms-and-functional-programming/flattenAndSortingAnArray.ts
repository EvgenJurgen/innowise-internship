export const flattenAndSort = (arr: number[][]): number[] => {
	return arr.flat().sort((a, b) => a - b)
}
