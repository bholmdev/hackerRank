function compareTriplets(a, b) {
    let pointsA = 0;
    let pointsB = 0;
    for (let i = 0; i < a.length; i++) {
        if (b[i] > a[i]) {
            pointsB++;
        } else if (b[i] < a[i]) {
            pointsA++;
        }
    }
    return [pointsA, pointsB];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));