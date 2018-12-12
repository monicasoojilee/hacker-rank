// SOCK MERCHANT -------------------------------------
function sockMerchant(n, ar) {
    ar.sort((a, b) => { return a - b })

    let counter = 0;
    while (ar.length > 0) {
        if (ar[0] === ar[1]) {
            counter++
            ar.splice(0, 2)
        } else {
            ar.splice(0, 2)
        }
    }
    return counter;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

// work-in-progress: 3/9 test cases failed