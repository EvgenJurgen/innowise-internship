export const spread = (callback: any, arr: unknown[]): any => {
	return callback(...arr)
}
