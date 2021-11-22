export const maxTripletSum = (arr: number[]): void => {
	arr.sort((a, b) => b - a)

	const threeMaxNumbers: number[] = []

	for (const item of arr) {
		while (threeMaxNumbers.length < 3) {
			if (threeMaxNumbers.includes(item)) {
				break
			} else {
				threeMaxNumbers.push(item)
			}
		}
	}

	console.log('maxTripletSum result: ', threeMaxNumbers)
	console.log(
		'maxTripletSum sum: ',
		threeMaxNumbers.reduce((sum, item) => sum + item)
	)
}
