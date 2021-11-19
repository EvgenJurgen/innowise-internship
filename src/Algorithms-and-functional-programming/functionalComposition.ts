export const compose = (...args: any[]) => {
	return (a: unknown) => {
		args.reverse().reduce((result, f) => f(result), a)
	}
}
