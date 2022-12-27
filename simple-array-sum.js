function simpleArraySum(ar) {
    return ar.reduce((acc, cur) => acc + cur);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));