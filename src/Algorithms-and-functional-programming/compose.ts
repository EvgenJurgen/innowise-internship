export const compose = (...args: any[]): any => {
	return (a: unknown): any => {
		return args.reverse().reduce((result, f) => f(result), a);
	};
};
