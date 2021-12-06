export class Singleton {
	private static instance: Singleton
	name: string

	constructor() {
		if (Singleton.instance) {
			return Singleton.instance
		} else {
			this.name = 'Singleton'
			Singleton.instance = this
		}
	}
}
