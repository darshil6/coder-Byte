/**
 * Using the JavaScript language, have the function threePoints(strArr) read the
 * array of strings stored in strArr which will always contain 3 elements and be
 * in the form: ["(x1,y1)", "(x2,y2)", "(x3,y3)"]. Your goal is to first create
 * a line formed by the first two points (that starts from the first point and
 * moves in the direction of the second point and that stretches in both
 * directions through the two points), and then determine what side of the line
 * point 3 is on. The result will either be right, left, or neither. For
 * example: if strArr is ["(1,1)", "(3,3)", "(2,0)"] then your program should
 * return the string right because the third point lies to the right of the line
 * formed by the first two points.
 *
 * https://www.coderbyte.com/results/bhanson:Three%20Points:JavaScript
 *
 * @param  {array} strArr
 * @return {string} 'right', 'left', or 'neither'
 */


function threePoints(strArr) {
    // Helper to parse "(x,y)" into [x,y]
    function parsePoint(str) {
      return str.slice(1, -1).split(",").map(Number);
    }
  
    const [x1, y1] = parsePoint(strArr[0]);
    const [x2, y2] = parsePoint(strArr[1]);
    const [x3, y3] = parsePoint(strArr[2]);
  
    // Cross product
    const val = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);
  
    if (val > 0) return "left";
    if (val < 0) return "right";
    return "neither";
  }
    
// function threePoints(strArr) {
//     // Parse input
//     const [pointA, pointB, pointX] = strArr.map(point => {
//         const [, x, y] = point.match(/\((-?[\d]+),(-?[\d]+)\)/).map(Number);
//         return { x, y };
//     });

//     // y = mx + b
//     const slope = (pointB.y - pointA.y) / (pointB.x - pointA.x); // m
//     const yIntercept = (pointA.y - slope) / pointA.x; // b

//     // x = (y - b) / m
//     let x;
//     if (slope === Infinity) {
//         x = pointX.x;
//     } else {
//         x = pointX.y - yIntercept + slope;
//     }

//     if (x === 0 || Number.isNaN(x)) {
//         return 'neither';
//     }

//     return x < 0 ? 'left' : 'right';
// }

// module.exports = threePoints;