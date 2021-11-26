const numbers = (romanNumber: string): number => {
	switch (romanNumber) {
		case 'I':
			return 1
		case 'V':
			return 5
		case 'X':
			return 10
		case 'L':
			return 50
		case 'C':
			return 100
		case 'D':
			return 500
		case 'M':
			return 1000
		default:
			return NaN
	}
}

export const romanToNumber = (number: string): number => {
	try {
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

		if (isNaN(result)) {
			throw Error('Error in romanToNumber function')
		}

		return result
	} catch (e) {
		console.log(e)
		return NaN
	}
}
