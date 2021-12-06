const stringNumbersFromOneToN = (n: number): string[] => {
	return Array.from({ length: n }, (_, i) => `${i + 1}`);
};

export const pattern = (amount: number): string[] => {
	const arrayStringNumbers: string[] = stringNumbersFromOneToN(amount);

	return arrayStringNumbers.reduce((pattrens, _, index, array) => {
		pattrens.push(array.slice(index, array.length).concat(array.slice(0, index)).join(''));
		return pattrens;
	}, []);
};
