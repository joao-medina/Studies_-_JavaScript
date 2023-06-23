const user = {
    name: 'Jon',
    idade: 17,
    address: {
        kingdom: 'North',
        castle: 'Winterfell'
    }
}

const { name, ...restObject } = user;
console.log(restObject)
//{ idade: 17, address: { kingdom: 'North', castle: 'Winterfell' } }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const [first, , third, ...restArray] = array

console.log(first)
//1
console.log(third)
//3
console.log(restArray)
/*
[
  4, 5, 6, 7,
  8, 9, 0
]
*/