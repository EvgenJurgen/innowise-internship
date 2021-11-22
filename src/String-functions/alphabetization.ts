const sortString = (a: string, b: string) => {
	return a.toLowerCase() > b.toLocaleLowerCase()
		? 1
		: a.toLowerCase() < b.toLocaleLowerCase()
		? -1
		: 0
}

export const alphabetized = (text: string) => {
	console.log(
		'alphabetized() result: ',
		text
			.match(/[a-zA-z0-9]/gi)
			.sort(sortString)
			.join('')
	)
}
