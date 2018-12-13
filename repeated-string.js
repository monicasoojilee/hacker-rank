// REPEATED STRING -------------------------------------

function repeatedString(s, n) {
    let infiniteString = "";
    if (s === "a"){
        return n;
    } else {
        for (let i = 0; i < n; i++){
            infiniteString += s
        }
        return infiniteString.slice(0, n).match(/a/g).length
    }
}

console.log(repeatedString('abcac', 10))
console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))