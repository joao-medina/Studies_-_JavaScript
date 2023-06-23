const array = [1, 2, 3, 4, 5]

//map()
//filter()
//every()
//some()
//find()
//findIndex()


//map() 
//Serve para mudar um array para um novo array, alterando os valores
const novoArray = array.map(item=> {
    return item * 2
})


//filter() 
//Apenas filtra e retorna os valores, sem alterar
const novoArray2 = array.filter(item => item % 2 === 0)


//every() 
//Verifica se todos os itens satisfazem uma condição, retorna um valor booleano
const saoNumeros = array.every(item => typeof item === 'number')
//true

//some()
//Verifica se ao menos um valor satisfaz a condição
const aoMenosUm = array.some(item => item === 3)
//true


//find()
//Procura o primeiro item que satisfaz a condição, retornando o valor
const par = array.find(item => item % 2 === 0)
//2

//find()
//Procura o primeiro item que satisfaz a condição, retornando o índice
const parIndex = array.findIndex(item => item % 2 === 0)
//1