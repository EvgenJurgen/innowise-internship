export const reduce = (arr: unknown[], callback: any, initialValue: unknown): unknown => {
	let previousValue = initialValue;
	for (let index = 0; index < arr.length; index++) {
		previousValue = callback(previousValue, arr[index], index, arr);
	}

	return previousValue;
};
