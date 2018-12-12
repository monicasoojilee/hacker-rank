// SOCK MERCHANT -------------------------------------
function sockMerchant(n, ar) {
    ar.sort((a, b) => { return a - b })

    let counter = 0;
    for (let i = 0; i < n; i++) {
        if (ar[i] === ar[i + 1]) {
            counter++;
            i++;
        }
    }
    return counter;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
