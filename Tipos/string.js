//Tamanho da string
const txtSize = 'Texto'.length;
console.log(`Quantidade de letras: ${txtSize}`)

//Quebrando a string em função de um delimitador
const splittedTxt = 'Texto'.split('x')
console.log(`Antes e depois do x: ${splittedTxt}`)

//Substituindo um valor por outro
const replacedTxt = 'Texto'.replace('e', '3')
console.log(`Trocando e por 3: ${replacedTxt}`)

//Retorna uma fatia
const lastChar = 'Texto'.slice(-1)
console.log(`Última letra da palavra: ${lastChar}`)

const thirdChar = 'Texto'.slice(2)
console.log(`A partir da segunda letra: ${thirdChar}`)

const centersChar = 'Texto'.slice(1, -1)
console.log(`A partir da primeira menos a última: ${centersChar}`)

const firsthChar = 'Texto'.substr(0, 2) 
console.log(`Do primeiro caracter até os próximos 2: ${firsthChar}`)