let user = {
    nome: 'Guilherme',
    sobrenome: 'Vieira Lima',
    idade: 26
}

//Algumas propriedade:
console.log('Chaves do objeto:', Object.keys(user))
console.log('Os valores do Objeto: ', Object.values(user))
console.log('Lista de listas com as propriedades e valores:', Object.entries(user))

//Prevenir alterações no objeto
Object.freeze(user) //Object.seal não permitirá a exclusão ou adição de propriedade, apenas modificar
user.nome = 'Gui'
delete user.idade,
console.log('Após o freeze:', user)