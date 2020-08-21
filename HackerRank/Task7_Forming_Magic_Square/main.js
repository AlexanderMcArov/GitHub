let cubic = [
    [2, 9, 8],
    [4, 2, 7],
    [5, 6, 7]
]

let row = [0,0,0]
let col = [0,0,0]
let dLR = 0
let dRL = 0
let cost = 0

function checkSum(){
    row = [0,0,0]
    col = [0,0,0]
    dLR = 0
    dRL = 0
    for(let i = 0; i < cubic.length; i++){
        row[i] = cubic[i][0] + cubic[i][1] + cubic[i][2]
        col[i] = cubic[0][i] + cubic[1][i] + cubic[2][i]
        dLR += cubic[i][i]
        dRL += cubic[i][2-i]
    }
    console.log('Суммы строк: ' + row);
    console.log('Суммы колонн: ' + col);
    console.log('Сумма диагонали слева-направо: ' + dLR);
    console.log('Сумма диагонали справа-налево: ' + dRL);
    return console.log('Количество ходов: ' + cost);
}

if(cubic[1][1] != 5){
    cubic[1][1] = 5
    cost++
}

checkSum()

function perebor(){
    
    checkSum()
    console.log(cubic);
}




