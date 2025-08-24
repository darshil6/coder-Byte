/**
 * Using the JavaScript language, have the function matrixSpiral(strArr) read
 * the array of strings stored in strArr which will represent a 2D N matrix, and
 * your program should return the elements after printing them in a clockwise,
 * spiral order. You should return the newly formed list of elements as a string
 * with the numbers separated by commas. For example: if strArr is "[1, 2, 3]",
 * "[4, 5, 6]", "[7, 8, 9]" then this looks like the following 2D matrix:
 *
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * So your program should return the elements of this matrix in a clockwise,
 * spiral order which is: 1,2,3,6,9,8,7,4,5
 *
 * https://www.coderbyte.com/results/bhanson:Matrix%20Spiral:JavaScript
 *
 * @param  {array} strArr
 * @return {string}
 */

function matrixSpiral(strArr) {
    // Step 1: Parse input into 2D matrix
    const matrix = strArr.map(row =>
      row.replace(/\[|\]/g, "").split(",").map(num => parseInt(num.trim(), 10))
    );
  
    const n = matrix.length;
    const m = matrix[0].length;
    const result = [];
  
    let top = 0, bottom = n - 1, left = 0, right = m - 1;
  
    // Step 2: Traverse in spiral order
    while (top <= bottom && left <= right) {
      // Traverse top row
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);
      top++;
  
      // Traverse right column
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
      right--;
  
      if (top <= bottom) {
        // Traverse bottom row
        for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
        bottom--;
      }
  
      if (left <= right) {
        // Traverse left column
        for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
        left++;
      }
    }
  
    // Step 3: Return as comma-separated string
    return result.join(",");
  }
  

console.log(matrixSpiral(["[1, 2, 3]","[4, 5, 6]", "[7, 8, 9]"]))








// function matrixSpiral(strArr) {
//     const matrix = strArr.map(JSON.parse);

//     const results = [];

//     for (const element of matrixSpiralGenerator(matrix)) {
//         results.push(element);
//     }

//     return results.join(',');
// }

// function* matrixSpiralGenerator(matrix) {
//     // RIGHT 0 -> DOWN 1 -> LEFT 2 -> UP 3
//     const DIRECTIONS = [
//         [1, 0], // RIGHT
//         [0, 1], // DOWN
//         [-1, 0], // LEFT
//         [0, -1] // UP
//     ];

//     const visited = Array(matrix.length)
//         .fill(0)
//         .map(row => Array(matrix[0].length).fill(0));

//     const totalElements = matrix.length * matrix[0].length;

//     let posX = 0;
//     let posY = 0;

//     let vector = 0; // index of DIRECTIONS

//     yield matrix[posY][posX];
//     visited[posY][posX] = 1;

//     for (let i = 1; i < totalElements; i++) {
//         for (let j = 0; j < DIRECTIONS.length; j++) {
//             let testX = posX + DIRECTIONS[vector][0];
//             let testY = posY + DIRECTIONS[vector][1];

//             if (
//                 testX < visited[0].length &&
//                 testY < visited.length &&
//                 visited[testY][testX] === 0
//             ) {
//                 // Good!
//                 posX = testX;
//                 posY = testY;
//                 visited[posY][posX] = 1;
//                 break;
//             }
//             // Try next direction
//             vector = (vector + 1) % 4;
//         }

//         yield matrix[posY][posX];
//     }
// }

// module.exports = matrixSpiral;
