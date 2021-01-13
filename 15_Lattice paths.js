/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
https://projecteuler.net/problem=15
*/

function lattice(rows, columns) {
    let paths = [rows+1, columns+1];

    for(let row=0; row <= rows; row++){
        for(let column=0; column<=columns; column++){
            if (row == 0 || column == 0) paths[row, column] = 1
            else paths[row, column] = paths[row-1, column] + paths[row, column-1];
        }
    }

    return paths[paths.length-1]
}

console.log(lattice(20,20))