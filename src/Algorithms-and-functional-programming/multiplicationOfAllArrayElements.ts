export const multiplyAll = (arr: number[]) => {
	return (n: number) => {
		return arr.map((item) => item * n)
	}
}
