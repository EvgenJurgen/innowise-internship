const sortString = (a: string, b: string): number => {
	if (a.toLowerCase() > b.toLocaleLowerCase()) {
		return 1
	} else if (a.toLowerCase() < b.toLocaleLowerCase()) {
		return -1
	} else {
		return 0
	}
}

export const alphabetized = (text: string): string => {
	return text
		.match(/[a-zA-z0-9]/gi)
		.sort(sortString)
		.join('')
}
