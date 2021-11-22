const numbers = (romanNumber: string) => {
	switch (romanNumber) {
		case 'I':
			return 1
			break
		case 'V':
			return 5
			break
		case 'X':
			return 10
			break
		case 'L':
			return 50
			break
		case 'C':
			return 100
			break
		case 'D':
			return 500
			break
		case 'M':
			return 1000
			break
		default:
			return NaN
			break
	}
}

export const romanToNumber = (number: string) => {
	number = number
		.replace('IV', 'IIII')
		.replace('IX', 'VIIII')
		.replace('XL', 'XXXX')
		.replace('XC', 'LXXXX')
		.replace('CD', 'CCCC')
		.replace('CM', 'DCCCC')

	let result = 0
	for (const item of number) {
		result += numbers(item)
	}

	console.log(`romanToNumber(${number}) result: `, result)
}
