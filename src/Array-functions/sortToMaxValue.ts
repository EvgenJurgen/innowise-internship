
const sortFunction = (a: string, b: string): number => {
	if (a.includes('0') && !b.includes('0')) return -1
	else if (!a.includes('0') && b.includes('0')) return 1
	else return Number(a > b)
}

//Has bugs
export const biggest = (numbersArray: number[]): void => {
	const stringArray: string[] = numbersArray.map((item) => item.toString())
	const resultString: string = stringArray.sort((a, b) => -1 * sortFunction(a, b)).join('')
	console.log('biggest result: ', resultString)
}
