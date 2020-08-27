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


let cubic = [ [ 4, 5, 8], [ 2, 4, 1 ], [ 1, 9, 7 ] ]	

let cost = [0,0,0,0,0,0,0,0,0]


function getCubic(a = 1,b = 3,c = 1) {
    let magicCubic = [
        [a + b, a + 2 * b + 2 * c, a + c],[a + 2 * c, a + b + c, a + 2 * b],[a + 2 * b + c, a, a + b + 2 * c],
        [a + 2 * b + c, a, a + b + 2 * c],[a + 2 * c, a + b + c, a + 2 * b],[a + b, a + 2 * b + 2 * c, a + c],
        [a + 2 * b + c, a, a + a + 2 * c],[a + b + 2 * c, a + b + c, a + 2 * b + c],[a + b, a + 2 * b + 2 * c, a + c],
        [a + b + 2 * c, a, a + 2 * b + c],[a + 2 * b, a + b + c, a + 2 * c],[a + c, a + 2 * b + 2 * c, a + b]
    ]

    return magicCubic
}

console.log(getCubic());


for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
            cost[0] += (Math.abs(getCubic(1,1,3)[i][j] - cubic[i][j]))
            cost[1] += (Math.abs(getCubic(1,3,1)[i][j] - cubic[i][j]))
            cost[2] += (Math.abs(getCubic(3,1,1)[i][j] - cubic[i][j]))
    }
}

console.log(cost);