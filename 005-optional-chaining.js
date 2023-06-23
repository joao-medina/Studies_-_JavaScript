const user = {
    name: 'Jon',
    idade: 17,
    address: {
        kingdom: 'North',
        castle: 'Winterfell',
        zip: {
            code: '0120192',
            street: 'Kings road'
        },
        funcao() {
            return 'working';
        }
    }
}


//Verifica se o user.addres possui o .kingdom
//Caso contrário, retorna: 'Não informado'
console.log(
    user.address ? user.address.kingdom : 'Não informado'
)


//Verifica se o user.addres tem o .zip
//Verifica se o user.addres.zip tem o .street
//Caso contrário, retorna: 'Não informado'
console.log(
    user.address?.zip?.street ?? 'Não informado'
)


//Retorna função apenas se a mesma existir dentro do objeto
console.log(user.address.funcao?.())