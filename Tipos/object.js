//Declarando um objeto:
let user = {
    nome: 'Guilherme',
    sobrenome: 'Vieira Lima',
    idade: 26
}
console.log(user)

//Alterando um parâmetro
user.nome = 'Gui'
user['sobrenome'] = 'V. Lima'
let prop = 'idade'
user[prop] = 26.5
console.log(user)

//Criar uma nova propriedade
user.cidade = 'Oliveira'
user['estado'] = 'MG'
console.log(user)

delete user.sobrenome
console.log(user)