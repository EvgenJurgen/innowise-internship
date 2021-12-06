interface MyObject {
	[key: string]: number;
}

export const romanToNumber = (number: string): number => {
	try {
		const numbers: MyObject = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000,
		};

		const decimal: number = number.split('').reduce((decimal, item, index, array) => {
			if (numbers[item] < numbers[array[index + 1]]) {
				return decimal - numbers[item];
			} else {
				return decimal + numbers[item];
			}
		}, 0);

		if (isNaN(decimal)) {
			throw new Error('Error in the romanToNumber function');
		}

		return decimal;
	} catch (e) {
		console.log(e);
		return NaN;
	}
};
