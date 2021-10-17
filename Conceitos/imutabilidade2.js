const alunos = [
    {
        name: 'Guilherme',
        grade: 4
    },
    {
        name: 'Renata',
        grade: 8
    },
    {
        name: 'Fernando',
        grade: 7
    }
]

function filtroAprovados(aluno){
    return aluno.grade >= 7
}

function getAlunosAprovados(listaAlunos){
    return listaAlunos.filter(aluno => aluno.grade >= 7) //Arrow Function
    //return listaAlunos.filter(filtroAprovados)         
}
//O método filter() cria um novo array com todos os elementos que passaram no teste implementado 
//pela função fornecida.

console.log('Alunos aprovados:');
console.log(getAlunosAprovados(alunos))

