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



*/
let cubic = [ [ 4, 8, 2 ], [ 4, 5, 7 ], [ 6, 1, 6 ] ]
let cost = 0
if(cubic[1][1] != 5){
    cost = Math.abs(cubic[1][1] - 5)
    cubic[1][1] = 5
}
cubic = cubic.flat()
let dLR = 0
let dRL = 0
let row = []
let col = []
function calcSum(){
    dLR = cubic[0] + cubic[4] + cubic[8]
    dRL = cubic[2] + cubic[4] + cubic[6]
    col = [
        cubic[0] + cubic[3] + cubic[6],
        cubic[1] + cubic[4] + cubic[7],
        cubic[2] + cubic[5] + cubic[8]
    ]
    row = [
        cubic[0] + cubic[1] + cubic[2],
        cubic[3] + cubic[4] + cubic[5],
        cubic[6] + cubic[7] + cubic[8]
    ]
}
calcSum()
function loop(){
    if(col[2] == 16 && row[2] == 16){
        cubic[8]--
        cost--
    }
    if(dLR < 15){
        if(col[0] + row[0] > col[2] + row[2]){
            cubic[8]++
            cost++
        }else if(col[0] + row[0] < col[2] + row[2]){
            cubic[0]++
            cost++
        }
    }else if(dLR > 15){
        if(col[0] + row[0] > col[2] + row[2]){
            cubic[8]--
            cost--
        }else if(col[0] + row[0] < col[2] + row[2]){
            cubic[0]--
            cost--
        } // RL
    }else if(dRL < 15){
        if(col[2] + row[0] > col[0] + row[2]){
            cubic[2]++
            cost--
        }else if(col[2] + row[0] < col[0] + row[2]){
            cubic[6]++
            cost--
        }
    }else if(dRL > 15){
        if(col[2] + row[0] > col[0] + row[2]){
            cubic[2]--
            cost--
        }else if(col[2] + row[0] < col[0] + row[2]){
            cubic[6]--
            cost--
        }
    }else if(row[0] < 15){
        cubic[1]++
        cost++
    }else if(row[0] > 15){
        cubic[1]--
        cost--
    }else if(row[1] > 15){
        if(col[0] < col[2]){
            cubic[5]--
            cost--
        }else if(col[0] > col[2]){
            cubic[3]--
            cost--
        }
    }else if(row[1] < 15){
        if(col[0] < col[2]){
            cubic[3]++
            cost++
        }else if(col[0] > col[2]){
            cubic[5]++
            cost++
        }
    }else if(row[2] > 15){
        cubic[7]--
        cost--
    }else if(row[2] < 15){
        cubic[7]++
        cost++
    }else if(col[0] > 15){
        if(row[2] == 15){

        }
        cubic[6]--
        cost--
    }else if(col[0] < 15){
        cubic[6]++
        cost++
    }else if(col[2] > 15){
        cubic[8]--
        cost--
    }else if(col[2] < 15){
        cubic[8]++
        cost++
    }else{
        let max_elem = 0
        console.log('Нет условия');
        for(let i = 0; i < cubic.length;i++){
            if(max_elem < cubic[i]) max_elem = cubic[i]
            cubic[i] -= 2
            cost -= 2
            console.log('Удалили' + i);
        }
    }
    calcSum()
    if(dRL > 15){
        cubic[2]--
        cost--
    }else if(dLR > 15){
        cubic[0]--
        cost--
    }
    console.log(dRL);
    console.log(dLR);
    console.log(row);
    console.log(col);
    console.log(cubic);
    console.log(cost);
}

while(dRL + dLR + row[0] + row[1] + row[2] + col[0] + col[1] + col[2] != 120){
    loop()
}
