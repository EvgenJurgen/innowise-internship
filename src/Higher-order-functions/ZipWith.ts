export const ZipWith = (fn: any, arr1: unknown[], arr2: unknown[]) => {
	if (arr1.length >= arr2.length) {
		arr1 = arr1.slice(0, arr2.length)
		console.log(arr1)
	}

	console.log(
		'ZipWith result: ',
		arr1.map((item, index) => fn(item, arr2[index]))
	)
}
