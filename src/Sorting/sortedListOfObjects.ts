export const sort = (list: object[], sortBy: string): object[] => {
	const result = list.sort((a: any, b: any) => {
		return b[sortBy] - a[sortBy]
	})
	return result
}
