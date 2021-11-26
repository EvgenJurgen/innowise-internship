export const sequenceSum = function recursion(begin: number, end: number, step: number): number {
	if (begin > end && begin + step > end) {
		return 0
	} else {
		return begin + recursion(begin + step, end, step)
	}
}
