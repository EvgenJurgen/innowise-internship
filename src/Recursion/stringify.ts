export const stringify = function recusion(list: any): string {
	return list === null ? `${list}` : `${list.data} -> ${recusion(list.next)}`;
};
