/** Classe responsável por executar funções com os números romanos. */
class Parser {
	characters: Array<String>;
	charactersValues: Array<number>;

	/**
	 * Inicializa a classe e configura os caracteres e seus respectivos
	 * valores.
	 */
	constructor() {
		this.characters = ["I", "V", "X", "L", "C", "D", "M"];
		this.charactersValues = [1, 5, 10, 50, 100, 500, 1000];
	}

	private validate(arrayToValidate: Array<String>) {
		arrayToValidate.forEach((character) => {
			if (!this.characters.includes(character)) {
				throw new SyntaxError(`Caracter inválido. [${character}]`);
			}
		});
		return;
	}

	/**
	 * Transforma uma string com numeros romanos em uma lista.
	 * @param {String} stringToParse - A string para ser tranformada.
	 * @return {Array<String>} - Retorna o número romano passado em forma
	 * de lista.
	 */
	toArray(stringToParse: String): Array<string> {
		const length = stringToParse.length;
		let parsedString = [];
		let round = 0;

		while (round < length) {
			parsedString.push(stringToParse[round]);
			round++;
		}

		this.validate(parsedString);
		return parsedString;
	}

	/**
	 * Transforma uma lista com numeros romanos em uma string.
	 * @param {Array<string>} arrayToConcat - A lista para ser tranformada.
	 * @return {string} - Retorna o número romano passado em forma
	 * de string.
	 */
	toString(arrayToConcat: Array<string>): string {
		this.validate(arrayToConcat);
		try {
			let concatenedString = "";
			concatenedString = concatenedString.concat(...arrayToConcat);

			return concatenedString;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Converte um número romano em forma de string para o seu valor em
	 * forma de número inteiro.
	 * @param {String} character - A string para ser tranformada.
	 * @return {number} - Retorna o número romano passado em forma
	 * de número inteiro.
	 */
	getValue(character: String): number {
		this.validate([character]);
		try {
			const characterIndex = this.characters.indexOf(character);
			return this.charactersValues[characterIndex];
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Converte uma lista de números romanos para o seu valor em forma
	 * de número inteiro.
	 * @param {Array<String>} arrayToGetValues - A lista para conseguir
	 * seus valores.
	 * @return {number} - Retorna o número inteiro que o número romano
	 * passado representa.
	 */
	getValues(arrayToGetValues: Array<String>): number {
		this.validate(arrayToGetValues);
		try {
			const totalLength = arrayToGetValues.length;
			let charactersValues: number[] = [];
			let finalResult = 0;
			let round = 0;

			arrayToGetValues.forEach((character) => {
				charactersValues.push(this.getValue(character));
			});

			while (round < totalLength) {
				if (charactersValues[round] > charactersValues[round + 1]) {
					finalResult += charactersValues[round];
				} else if (
					charactersValues[round] < charactersValues[round + 1]
				) {
					finalResult +=
						charactersValues[round + 1] - charactersValues[round];
					round++;
				} else {
					finalResult += charactersValues[round];
				}
				round++;
			}
			return finalResult;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Transforma duas listas de números romanos em números inteiros
	 * e retorna a subtração desses números.
	 * @param {Array<String>} arrayOne - Uma lista de números romanos.
	 * @param {Array<String>} arrayTwo - Outra lista de números romanos.
	 * @return {number} - Retorna a subtração das duas listas de números
	 * romanos em forma de número inteiro.
	 */
	subtract(arrayOne: Array<String>, arrayTwo: Array<String>): number {
		this.validate(arrayOne);
		this.validate(arrayTwo);
		try {
			const arrayOneValue = this.getValues(arrayOne);
			const arrayTwoValue = this.getValues(arrayTwo);

			return arrayOneValue - arrayTwoValue;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Transforma duas listas de números romanos em números inteiros
	 * e retorna a adição desses números.
	 * @param {Array<String>} arrayOne - Uma lista de números romanos.
	 * @param {Array<String>} arrayTwo - Outra lista de números romanos.
	 * @return {number} - Retorna a adição das duas listas de números
	 * romanos em forma de número inteiro.
	 */
	add(arrayOne: Array<String>, arrayTwo: Array<String>): number {
		this.validate(arrayOne);
		this.validate(arrayTwo);
		try {
			const arrayOneValue = this.getValues(arrayOne);
			const arrayTwoValue = this.getValues(arrayTwo);

			return arrayOneValue + arrayTwoValue;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Transforma duas listas de números romanos em números inteiros
	 * e retorna a multiplicação desses números.
	 * @param {Array<String>} arrayOne - Uma lista de números romanos.
	 * @param {Array<String>} arrayTwo - Outra lista de números romanos.
	 * @return {number} - Retorna a multiplicação das duas listas de
	 * números romanos em forma de número inteiro.
	 */
	multiply(arrayOne: Array<String>, arrayTwo: Array<String>): number {
		this.validate(arrayOne);
		this.validate(arrayTwo);
		try {
			const arrayOneValue = this.getValues(arrayOne);
			const arrayTwoValue = this.getValues(arrayTwo);

			return arrayOneValue * arrayTwoValue;
		} catch (err) {
			throw new Error(err);
		}
	}

	/**
	 * Transforma duas listas de números romanos em números inteiros
	 * e retorna a divisão desses números.
	 * @param {Array<String>} arrayOne - Uma lista de números romanos.
	 * @param {Array<String>} arrayTwo - Outra lista de números romanos.
	 * @param {number} fractionDigits - (Opcional) Número desejado de
	 * casas após a vírgula. Padrão: 2
	 * @return {number} - Retorna a divisão das duas listas de números
	 * romanos em forma de número inteiro ou flutuante.
	 */
	divide(
		arrayOne: Array<String>,
		arrayTwo: Array<String>,
		fractionDigits: number = 2
	): number {
		this.validate(arrayOne);
		this.validate(arrayTwo);
		try {
			const arrayOneValue = this.getValues(arrayOne);
			const arrayTwoValue = this.getValues(arrayTwo);

			return parseFloat(
				(arrayOneValue / arrayTwoValue).toFixed(fractionDigits)
			);
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default Parser;
