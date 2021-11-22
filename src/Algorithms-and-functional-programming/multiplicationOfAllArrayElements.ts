export const multiplyAll = (arr: number[]): any => {
	return (n: number): number[] => {
		return arr.map((item) => item * n)
	}
}
