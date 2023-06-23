const user = {
    name: 'Jon',
    idade: 17,
    address: {
        kingdom: 'North',
        castle: 'Winterfell'
    }
}


console.log('name' in user)
//true


console.log(JSON.stringify(user))
//{"name":"Jon","idade":17,"addres":{"kingdom":"North","castle":"Winterfell"}}


console.log(Object.keys(user))
//[ 'name', 'idade', 'addres' ]


console.log(Object.values(user))
//[ 'Jon', 17, { kingdom: 'North', castle: 'Winterfell' } ]


console.log(Object.entries(user))
/*
[
  [ 'name', 'Jon' ],
  [ 'idade', 17 ],
  [ 'addres', { kingdom: 'North', castle: 'Winterfell' } ]
]
*/

/*/Desestruturação*/
function showName(user) {
    return user.name;
}
const { address, idade: age } = user


/*Rest operator*/
const { name, ...rest } = user;
console.log(rest)
//{ idade: 17, address: { kingdom: 'North', castle: 'Winterfell' } }
