export const stringify = function recusion(list: any): string {
	return list.next === null ? `${list.data} -> null` : `${list.data} -> ${recusion(list.next)}`
}
