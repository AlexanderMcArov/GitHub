console.log('Forming Magic Cubes');

// let cubic = [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]
/*
cubic[0] => col[0] , row[0] , dLR
cubic[1] => col[1] , row[0]
cubic[2] => col[2] , row[0] , dRL
cubic[3] => col[0] , row[1]
cubic[4] => col[0] , row[0] , dLR , dRL
cubic[5] => col[2] , row[1]
cubic[6] => col[0] , row[2] , dRL
cubic[7] => col[1] , row[2]
cubic[8] => col[0] , row[0] , dLR

разбить элементы по линиям
найти суммы строк столбцов по элемнтам
результаты сложения по модулям пушить в новый массив
нужно узнать только разницу между двумя квадратами(массивами).
a+ b	a + 2b + 2c	a + c
a + 2c	a + b + c	a + 2b
a + 2b + c	a	a + b + 2c



*/
// let cubic = [ [ 4, 5, 8], [ 2, 4, 1 ], [ 1, 9, 7 ] ]
// let cubic = [ [ 4, 8, 2 ], [ 4, 5, 7 ], [ 6, 1, 6 ] ]		

// let cost = [0,0,0]


// function getCubic(a = 1,b = 3,c = 1) {
//     let magicCubic = [
//         [a + b, a + 2 * b + 2 * c, a + c],[a + 2 * c, a + b + c, a + 2 * b],[a + 2 * b + c, a, a + b + 2 * c]
//     ]

//     return magicCubic
// }

// console.log(getCubic());

// for(let i = 0; i < cubic.length; i++){
//     for(let j = 0; j < cubic[i].length; j++){
//         cost[0] += (Math.abs(getCubic(1,1,3)[i][j] - cubic[i][j]))
//         cost[1] += (Math.abs(getCubic(1,3,1)[i][j] - cubic[i][j]))
//         cost[2] += (Math.abs(getCubic(3,1,1)[i][j] - cubic[i][j]))
//     }
// }
// cost.sort((a,b) => a - b)
// console.log(cost);


// let cubic = [ [ 4, 5, 8], [ 2, 4, 1 ], [ 1, 9, 7 ] ]	

// let cost = [0,0,0,0,0,0,0,0,0]


// function getCubic(a = 1,b = 3,c = 1) {
//     let magicCubic = [
//         [a + b, a + 2 * b + 2 * c, a + c],[a + 2 * c, a + b + c, a + 2 * b],[a + 2 * b + c, a, a + b + 2 * c],
//         [a + 2 * b + c, a, a + b + 2 * c],[a + 2 * c, a + b + c, a + 2 * b],[a + b, a + 2 * b + 2 * c, a + c],
//         [a + 2 * b + c, a, a + a + 2 * c],[a + b + 2 * c, a + b + c, a + 2 * b + c],[a + b, a + 2 * b + 2 * c, a + c],
//         [a + b + 2 * c, a, a + 2 * b + c],[a + 2 * b, a + b + c, a + 2 * c],[a + c, a + 2 * b + 2 * c, a + b]
//     ]

//     return magicCubic
// }

// console.log(getCubic());


// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//             cost[0] += (Math.abs(getCubic(1,1,3)[i][j] - cubic[i][j]))
//             cost[1] += (Math.abs(getCubic(1,3,1)[i][j] - cubic[i][j]))
//             cost[2] += (Math.abs(getCubic(3,1,1)[i][j] - cubic[i][j]))
//     }
// }

// console.log(cost);
// let magicCubic = [
//     //         [a + b, a + 2 * b + 2 * c, a + c],[a + 2 * c, a + b + c, a + 2 * b],[a + 2 * b + c, a, a + b + 2 * c]
//     //     ]
let cubic = [6, 4, 6, 9, 9, 3, 9, 9, 7]
let a = 1
let b = 1
let c = 3
let cost = [0,0,0,0]

let calc = [
    function x1(){return a + b},
    function x2(){return a + 2 * b + 2 * c},
    function x3(){return a + c},
    function x4(){return a + 2 * c},
    function x5(){return a + b + c},
    function x6(){return a + 2 * b},
    function x7(){return a + 2 * b + c},
    function x8(){return a},
    function x9(){return a + b + 2 * c}
]

// console.log(calc);
// calc.push(calc[0])
// calc.shift()

// console.log(calc);
// function findArgs() {
//     let _res1 = []
//     console.log(a,b,c);
//     _res1.push(Math.abs(cubic[0] - x1()))
//     _res1[0] += Math.abs(cubic[1] - x2())
//     _res1[0] += Math.abs(cubic[2] - x3())
//     a = 1, b = 3, c = 1
//     console.log(a,b,c);
//     _res1.push(Math.abs(cubic[0] - x1()))
//     _res1[1] += Math.abs(cubic[1] - x2())
//     _res1[1] += Math.abs(cubic[2] - x3())
//     a = 3, b = 1, c = 1
//     console.log(a,b,c);
//     _res1.push(Math.abs(cubic[0] - x1()))
//     _res1[2] += Math.abs(cubic[1] - x2())
//     _res1[2] += Math.abs(cubic[2] - x3())
//     console.log(_res1);
// }
// findArgs()

// function findFunc() {
//     console.log(cubic[0]-calc[0],cubic[1]-calc[1],cubic[2]-calc[2]);
//     console.log(cubic[3]-calc[0],cubic[4]-calc[1],cubic[5]-calc[2]);
//     console.log(cubic[6]-calc[0],cubic[7]-calc[1],cubic[8]-calc[2]);
//     console.log(cubic[0]-x4(),cubic[1]-x5(),cubic[2]-x6());
//     console.log(cubic[3]-x4(),cubic[4]-x5(),cubic[5]-x6());
//     console.log(cubic[6]-x4(),cubic[7]-x5(),cubic[8]-x6());
//     console.log(cubic[0]-x7(),cubic[1]-x8(),cubic[2]-x9());
//     console.log(cubic[7]-x7(),cubic[4]-x8(),cubic[5]-x9());
//     console.log(cubic[6]-x7(),cubic[7]-x8(),cubic[8]-x9());
// }

// findFunc()


// cost = Math.abs(cubic[0] - x7()) + Math.abs(cubic[1] - x8()) + Math.abs(cubic[2] - x9())
// cost += Math.abs(cubic[3] - x4()) + Math.abs(cubic[4] - x5()) + Math.abs(cubic[5] - x6())
// cost += Math.abs(cubic[6] - x1()) + Math.abs(cubic[7] - x2()) + Math.abs(cubic[8] - x3())


console.log(cost);