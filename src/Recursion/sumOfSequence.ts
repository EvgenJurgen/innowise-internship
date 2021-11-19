export const sequenceSum = function recursion(begin: number, end: number, step: number): number {
	return begin >= end ? 0 : begin + step > end ? 0 : step + recursion(begin + step, end, step)
}
