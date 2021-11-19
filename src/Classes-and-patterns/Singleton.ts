export class Singleton {
	private static instance: Singleton
	name: string

	constructor() {
		if (typeof Singleton.instance === 'object') {
			return Singleton.instance
		} else {
			this.name = 'Singleton'
			Singleton.instance = this
		}
	}
}
