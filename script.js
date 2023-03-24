var matrix = [

    [1, 0, 1, 0, 0],
    [0, 0, 2, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],

]



let side = 120;
let grassArr = [];

function setup() {
    frameRate(1);
    createCanvas(side * matrix.length, side * matrix[0].length);
    background("gray");

    for (let i = 0; i < matrix.length; i++) {  //  i = 1
        matrix[i].forEach(function(val, i2) {

            if(matrix[i][i2] === 1) {
                grassObj = new Grass(i, i2); // 0, 1
                grassArr.push(grassObj);
            }
        })
    }
}

function draw() {
    for (let i = 0; i < matrix.length; i++) {

        matrix[i].forEach((val, i2) => {

            if (matrix[i][i2] === 1) {
                fill("green");
                rect(i * side, side * i2, side, side);
            } else if (matrix[i][i2] === 0) {
                fill("gray");
                rect(i * side, side * i2, side, side);
            }

        });
    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mull(); //   grassArr[i].mull();
    }
}


// var matrix = [
//     [0, 0, 1],
//     [0, 0, 0],
// ];


// let side = 120;
// let grassArr = [];

// function setup() {
//     frameRate(1);
//     createCanvas(side * matrix[0].length, side * matrix.length);
//     background(178);

//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] === 1) {
//                 let grassObj = new Grass(x, y);
//                 gr1assArr.push(grassObj);
//             }
//         }
//     }
//     console.log(grassArr);
// }



// function draw() {
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             } else if (matrix[y][x] == 0) {
//                 fill("gray");
//                 rect(x * side, y * side, side, side);
//             }
//         }
//     }
//     for (let i = 0; i < grassArr.length; i++) {
//         grassArr[i].mull();

//     }
//     console.log(grassArr.length)
// }






















// let side = 120;

// function setup() {
//     createCanvas(side * 8, side * 8);
//     background("red");

//     for(let i = 0; i < 8; i++) {
//         for(let j = 0; j < 8; j++) {
//             fill("black");
//             rect(side * i, side * j, side, side);


//         if((i + j) % 2 === 0) {
//             fill("green");
//             rect(side * i, side * j, side, side);
//         } else {
//             fill("red");
//             rect(side * i, side * j, side, side);
//         }
//       }
//     }
// }







// let side = 120;

// function setup() {
//     createCanvas(side * 8, side * 8);
//     background("red");

//     for(let i = 0; i < 8; i++) {
//         for(let j = 0; j < 8; j++) {
//             fill("black");
//             rect(side * i, side * j, side, side);


//         if((i + j) % 2 === 0) {
//             fill("green");
//             rect(side * i, side * j, side, side);
//         } else {
//             fill("red");
//             rect(side * i, side * j, side, side);
//         }
//       }
//     }
// }



// let side = 120;

// function setup() {
//     createCanvas(side * 8, side * 8);
//     background("green");

//     for(let i = 0; i < 8; i++) {
//         for(let j = 0; j < 8; j++) {
//             fill("red");
//             rect(side * i, side * j, side, side);

//             if(7 - i !== j) {
//                 fill("black");
//                 rect(side * i, side * j, side, side);
//             } else {
//                 fill("red");
//                 rect(side * i, side * j, side, side);

//             }
//         }
//     }
// }


// let side = 120;

// function setup() {
//   createCanvas(side * 8, side * 8);
//   background("red");

//   for (let i = 0; i < 8; i++) {
//      for (let i2 = 0; i2 < 8; i2++) {
//       fill("green");
//       rect(side * i, side * i2, side, side);

//         if (i === i2) {
//             fill("red");
//             rect(side * i, side * i2, side, side);
//         } else {
//             fill("green");
//             rect(side * i, side * i2, side, side);
//         }

//       }
//    }

// }

