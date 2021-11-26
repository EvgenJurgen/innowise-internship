type Func = (x: number) => number;

export const add = (n: number): Func => {
	return (x: number): number => {
		return n + x;
	};
};
