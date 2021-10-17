function soma(a){
    return function(b){
        return console.log(a + b)
    }
}

const soma2 = soma(7)

soma2(2)
soma2(3)
soma2(4)
soma2(5)