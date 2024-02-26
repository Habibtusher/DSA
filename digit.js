const digutCount = (N) => {
    let sum = 0;

    while (N > 0) {
        const lastDigit = N % 10
        sum = (sum * 10) + lastDigit
        N = Math.floor(N / 10)

    }
    return sum
}
// console.log(digutCount(1221))
const palindrom = (N) => {
    let orginal = N
    let sum = 0;
    while (N > 0) {
        const lastDigit = N % 10
        sum = (sum * 10) + lastDigit
        N = Math.floor(N / 10)

    }
    return sum === orginal
}
// console.log(palindrom(1221))
const armstrongNumber = (N) => {
    let orginal = N
    let sum = 0;
    while (N > 0) {
        const lastDigit = N % 10
        sum += Math.pow(lastDigit, 3)
        N = Math.floor(N / 10)

    }
    return sum === orginal
}
console.log(armstrongNumber(35))