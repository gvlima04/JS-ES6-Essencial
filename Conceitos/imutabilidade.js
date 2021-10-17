const user = { //Declaração de um objeto com os seus atributos
    name: 'Guilherme',
    lastName: 'Vieira Lima'
}

function getUserWithFullName(user){
    return {
        ...user, //Spread Operator - Aproveitar os mesmos atributos do user passado como parâmetro
        fullName: `${user.name} ${user.lastName}` //String literal
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(user)
console.log(userWithFullName)