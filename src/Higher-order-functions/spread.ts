type Func = (...args: unknown[]) => unknown;

export const spread = (callback: Func, arr: unknown[]): unknown => {
	return callback(...arr)
}
