export const ZipWith = (fn: any, arr1: unknown[], arr2: unknown[]): any[] => {
	return Array.from({ length: Math.min(arr1.length, arr2.length) }, (_, i) => {
		return fn(arr1[i], arr2[i]);
	});
};
