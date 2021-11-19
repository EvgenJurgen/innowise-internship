interface String {
	customUpperCase(): string
}

String.prototype.customUpperCase = String.prototype.toUpperCase
