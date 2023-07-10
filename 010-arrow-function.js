function sum(a, b) {
    return a + b
}

let sum2 = (a, b) => a + b

console.log(sum(1, 2), sum2(3, 2))



function isPositive(number) {
    return number >= 0
}

let isPositive2 = number => number >= 0

console.log(isPositive(3), isPositive2(-2))



function randomNumber() {
    return 5
}

let randomNumber2 = () => 4

console.log(randomNumber(), randomNumber2())