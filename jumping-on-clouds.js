// JUMPING ON CLOUDS -------------------------------------
function jumpingOnClouds(c) {    
    let safeClouds = [];
    c.forEach((data, i) => {
        if (data === 0) {
            safeClouds.push(i)
        }
    })

    let currentPosition = 0;
    let moveCounter = 0;

    safeClouds.forEach((data, i, arr) => {
        console.log(data, arr[i + 1])
        if (currentPosition + 2 === arr[i + 1]){
            currentPosition = arr[ i + 1 ]
            console.log("Current position + 2: ", currentPosition)
            moveCounter++;
        } else if (currentPosition + 1 === arr[i + 1]){
            currentPosition = arr[ i + 1 ]
            console.log("Current position + 1: ", currentPosition)
            moveCounter++;
        }
    })
    return moveCounter;
}

// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2


console.log("TOTAL MOVES: ", jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4
console.log("TOTAL MOVES: ", jumpingOnClouds([0, 0, 0, 0, 1, 0]))    // 3