export const sort = (list: object[], sortBy: string): object[] => {
	list.forEach((item: object) => {
		if (!Object.keys(item).includes(sortBy)) {
			throw new Error('The object does not have such a key');
		}
	});

	const result = list.sort((a: any, b: any) => {
		return b[sortBy] - a[sortBy];
	});
	return result;
};
