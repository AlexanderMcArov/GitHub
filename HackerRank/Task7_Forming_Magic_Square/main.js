// 1·5·9 + 2·6·7 + 3·4·8 - 3·5·7 - 1·6·8 - 2·4·9 = 45 + 84 + 96 - 105 - 48 - 72 = 0

let cubic = [
    [1,8,2],
    [4,5,7],
    [6,4,5]
]

let sumAxes = {
    row_1: 0,
    row_2: 0,
    row_3: 0,
    column_1: 0,
    column_2: 0,
    column_2: 0,
    diagonal_LR: 0,
    diagonal_RL: 0
}

function printlog(){
    sumAxes.row_1 = cubic[0][0] + cubic[0][1] + cubic[0][2]
    sumAxes.row_2 = cubic[1][0] + cubic[1][1] + cubic[1][2]
    sumAxes.row_3 = cubic[2][0] + cubic[2][1] + cubic[2][2]
    sumAxes.column_1 = cubic[0][0] + cubic[1][0] + cubic[2][0]
    sumAxes.column_2 = cubic[0][1] + cubic[1][1] + cubic[2][1]
    sumAxes.column_3 = cubic[0][2] + cubic[1][2] + cubic[2][2]
    sumAxes.diagonal_LR = cubic[0][0] + cubic[1][1] + cubic[2][2]
    sumAxes.diagonal_RL = cubic[0][2] + cubic[1][1] + cubic[2][0]

    console.log(sumAxes.diagonal_LR + ' < = > ' + sumAxes.diagonal_RL);
    console.log(cubic[0] + ' || ' + sumAxes.row_1);
    console.log(cubic[1] + ' || ' + sumAxes.row_2);
    console.log(cubic[2] + ' || ' + sumAxes.row_3);
    console.log(`${sumAxes.column_1} | ${sumAxes.column_2} | ${sumAxes.column_3}`);
}

printlog()

function checkdLdR(){
    let check = sumAxes.row_1
    console.log('Check');
    console.log(check);
    for(let key in sumAxes){        
        if(sumAxes[key] < check) check = key      
    }
    if(check == 'diagonal_LR'){
        
    }
    console.log('Check');
    console.log(check);
    printlog()
}
