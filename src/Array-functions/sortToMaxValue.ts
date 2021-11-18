const sortFunction = (a: number, b: number): number => {
	return parseInt(a.toString() + b.toString()) > parseInt(b.toString() + a.toString()) ? -1 : 1
}

export const biggest = (numbersArray: number[]) => {
	const sortedNumbersArray = numbersArray.sort((a, b) => sortFunction(a, b))

	console.log('biggest result: ', sortedNumbersArray.join(''))
}
