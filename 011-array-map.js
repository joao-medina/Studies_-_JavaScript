const array = [5, 4, 3, 2, 1, 0]

console.log(array.map((item) => array[item]))
//[ 0, 1, 2, 3, 4, 5 ]

array.map(
   (c) => console.log(c) 
)
/*
5
4
3
2
1
0
*/