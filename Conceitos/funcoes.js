function getName(){ //Função que retorna uma String
    return 'Guilherme Vieira Lima';
}

function logFn(fn){ //Função que printa o retorno de outra função passada por parâmetro
    console.log(fn());
}

const logFnResult = logFn; //Atribui a função a uma variável

logFnResult(getName); 