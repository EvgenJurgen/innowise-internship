export const countDuplicates = (text: string): number => {
	text = text.toLowerCase().split('').sort().join('')

	let i = 0
	let char: string = text.charAt(i)
	let count = 0

	while (i < text.length) {
		const lastIndex: number = text.lastIndexOf(char)
		if (i < lastIndex) {
			count = count + 1
		}
		i = lastIndex + 1
		char = text.charAt(i)
	}

	return count
}
