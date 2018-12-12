// COUNTING VALLEYS -------------------------------------
function countingValleys(n, s) {
    let position = 0;
    let counter = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === "U") {
            position += 1;
            if (position === 0) {
                counter++;
            }
        }
        if (s[i] === "D") {
            position -= 1;
        }
    }
    return counter;
}