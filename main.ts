import Parser from "./assets/parser";
const parser = new Parser();

const numberOne = parser.toArray("MMXXI");
const numberTwo = parser.toArray("MDCDLXL");
const numberOneToString = parser.toString(numberOne);
const numberTwoToString = parser.toString(numberTwo);

const numberOneValue = parser.getValues(numberOne);
const numberTwoValue = parser.getValues(numberTwo);

const subtraction = parser.subtract(numberOne, numberTwo);
const addition = parser.add(numberOne, numberTwo);
const multiplication = parser.multiply(numberOne, numberTwo);
const division = parser.divide(numberOne, numberTwo);

console.log(`
    Número um:   ${numberOne}  (${numberOneToString}) --> ${numberOneValue}
    Número dois: ${numberTwo}  (${numberTwoToString}) --> ${numberTwoValue}

    Ambos subtraídos: ${subtraction}
    Ambos somados: ${addition}
    Ambos multiplicados: ${multiplication}
    Ambos divididos: ${division}
`);
