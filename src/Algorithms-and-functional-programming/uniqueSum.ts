export const uniqueSum = (array: number[]): number => {
	if (array.length === 0) {
		return 0;
	}

	return array.reduce((sum, item, index, array) => {
		if (index === array.indexOf(item)) {
			return sum + item;
		} else {
			return sum;
		}
	});
};
