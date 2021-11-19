export const stringify = function recusion(list: any): unknown {
	return list.next === null ? `${list.data} -> null` : `${list.data} -> ${recusion(list.next)}`
}
