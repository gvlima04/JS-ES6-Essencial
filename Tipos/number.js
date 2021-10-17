const myNumber = 13.7584

const number2string = myNumber.toString;
console.log('Número:', number2string)
console.log('Tipo do dado:', typeof number2string, '\n')

const fixedTwoDecimals = myNumber.toFixed(2);
console.log('Número arredondado:', fixedTwoDecimals, '\n')
console.log('Tipo do dado:', typeof fixedTwoDecimals, '\n')

const number2int = parseInt(myNumber)
console.log('Número:', number2int)
console.log('Tipo do dado continua sendo number (não int):', typeof number2int)