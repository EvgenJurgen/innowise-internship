export const toMachineName = (name: string, separator: string): string => {
	return name
		.replace(/^[0-9]/, '')
		.match(/\b[a-zA-Z0-9]+\b/gi)
		.join(separator)
		.toLocaleLowerCase()
}
