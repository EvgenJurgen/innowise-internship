export const countDuplicates = (text: string): number => {
	return text.split('').filter((item, index, array) => {
		return index === array.indexOf(item) && index !== array.lastIndexOf(item);
	}).length;
};
