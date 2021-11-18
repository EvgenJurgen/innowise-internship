const curry = (f: any) => {
	return (a: any) => {
		f(a)
	}
}

//does not work
const composeFunction = (...args: any[]) => {
	try {
		if (args.length === 0) {
			throw Error('Pass the functions as arguments')
		}

		if (args.length === 1) {
			return args[0].call(null, ...args)
		} else {
			const currentFunction = args.pop()
			return currentFunction.call(null, ...args)
		}
	} catch (exeption) {
		console.error(exeption)
	}
}

export const compose = (...args: any[]) => {
	return curry(composeFunction(args))
}
