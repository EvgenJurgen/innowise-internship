export const countDuplicates = (text: string) => {
	text = text.toLowerCase().split('').sort().join('')

	let i = 0
	let char = text.charAt(i)
	let count = 0

	while (i < text.length) {
		const lastIndex = text.lastIndexOf(char)
		if (i < lastIndex) {
			count = count + 1
		}
		i = lastIndex + 1
		char = text.charAt(i)
	}

	console.log('countDuplicates() result: ', count)
}
