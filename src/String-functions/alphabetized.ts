export const alphabetized = (text: string): string => {
	const alphabetWithNumbers: string[] = text.match(/[a-zA-z0-9]/gi);

	if (alphabetWithNumbers === null) {
		return '';
	}

	return alphabetWithNumbers.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1)).join('');
};
