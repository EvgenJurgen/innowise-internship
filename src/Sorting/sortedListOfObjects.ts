
export const sort = (list: object[], sortBy: string) => {
	const result = list.sort((a: any, b: any) => {
		return b[sortBy] - a[sortBy]
	})
	console.log(`sorted array by ${sortBy}`, result)
}
