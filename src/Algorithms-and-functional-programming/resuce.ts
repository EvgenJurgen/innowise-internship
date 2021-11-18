export const reduce = (arr: unknown[], callback: any, initialValue: unknown = undefined) => {
	if (!initialValue) {
		initialValue = arr[0]
		arr.shift()
	}

	for (const item of arr) {
		initialValue = callback(initialValue, item)
	}

	return initialValue
}
