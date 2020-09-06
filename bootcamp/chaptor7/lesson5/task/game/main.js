let game_title = $('div.game_title')
let table_item = $('div.table_item')
console.log(table_item);

let game_table = [0,0,0,0,0,0,0,0,0]
let player = {
    nolik: 1,
    crestik: 2,
    img:['*','<img src="./nolik.png">','<img src="./krestik.png">'],
    name:['*','Nolik','Simka','Ничья']
}
let game_step = player.nolik
let game_winner = 0

game_title.text('Сейчас ходит: ' + player.name[game_step])
$.each(table_item,function (index,value) {
    value = $(value)
    value.on('mouseenter',function () {
        if(game_table[index] == 0) value.css('background','rgba(50,255,50,.65)')
        else if(game_table[index] != 0) value.css('background','rgba(255,50,50,.65)')
        value.on('click',function(){
            if(game_table[index] != 0) return
            else if(game_winner != 0) return
            else{
                game_table[index] = game_step
                value.html(player.img[game_step])
                value.css('background','rgba(255,50,50,.65)')
                checkWinner()                
                game_backplayer = true                                               
                if(game_step == player.nolik) game_step = player.crestik
                else if(game_step == player.crestik) game_step = player.nolik                 
                game_title.text('Сейчас ходит : ' + player.name[game_step])
                if(game_winner != 0) game_title.text('Игру выиграл: ' + player.name[game_winner]) 
                console.log('Click: game_winner',game_winner,'last step: ',game_table[index])                         
            }            
        })
    })
    value.on('mouseleave',function () {
        value.css('background','rgba(0,0,0,0)')
    })
    
})

function checkWinner() {
    let arr = [[0,0,0],[0,0,0],[0,0,0]]
    let crosx = [0,0,0]
    let crosy = [0,0,0]
    let row = [[0,0,0],[0,0,0],[0,0,0]]
    let col = [[0,0,0],[0,0,0],[0,0,0]]
    let index = 0
    // let game_table = [0,0,0,0,0,0,0,0,0]
    // Create array[][]    
    for(let i = 0; i < 3;i++){
        for(let j = 0; j < 3;j++){            
            arr[i][j] = game_table[index]
            index++
        }
    }
    // check lines
    for (let i = 0; i < arr.length; i++) {  
        // check diagonals
        crosx[i] = arr[i][i]
        crosy[i] = arr[i][arr.length-1-i]

        for(let j = 0; j < arr[i].length; j++){
            row[i][j] = arr[i][j]
            col[i][j] = arr[j][i]              
        }
    }  

    console.log(`CheckWinner
    Check of .every:
    crosx: ${crosx.every(item => item > 0)}
    crosy: ${crosy.every(item => item > 0)}    
    row_1: ${row[0].every(item => item > 0)} || col_1: ${col[0].every(item => item > 0)}
    row_2: ${row[1].every(item => item > 0)} || col_2: ${col[1].every(item => item > 0)}
    row_3: ${row[2].every(item => item > 0)} || col_3: ${col[2].every(item => item > 0)}

    Check of  [index]:    
    row_1: ${row[0]}, row_2: ${row[1]}, row_3: ${row[2]}
    col_1: ${col[0]}, col_2: ${col[1]}, col_3: ${col[2]}
    crosx: ${crosx}
    crosy: ${crosy}
    game_table: ${game_table}  
    `);
    
    if(crosx.every(item => item > 0)){
        let sum = crosx.reduce((a,b)=>a+b)
        console.log('Левая Диагональ',sum);
        if(sum == 3) game_winner = 1
            else if(sum == 6) game_winner = 2
    }
    if(crosy.every(item => item > 0)){
        let sum = crosy.reduce((a,b)=>a+b)
        console.log('Правая Диагональ',sum);
        if(sum == 3) game_winner = 1
            else if(sum == 6) game_winner = 2
    } 
    for(let i = 0; i < 3;i++){
        if(row[i].every(item => item > 0)){
            let sum = row[i].reduce((a,b)=>a+b)
            console.log('Строка',i,sum);
            if(sum == 3) game_winner = 1
            else if(sum == 6) game_winner = 2
        }
        if(col[i].every(item => item > 0)){
            let sum = col[i].reduce((a,b)=>a+b)
            console.log('Колонна',i,sum);
            if(sum == 3) game_winner = 1
            else if(sum == 6) game_winner = 2
        }
    }
    if(arr.flat().every(item => item > 0) && game_winner == 0) game_winner = 3    
}

function backStep() {
    game_backplayer = true 
    let index = Math.floor(Math.random()*table_item.length)
    console.log(index);
    let item = table_item[index];
    value = $(item)
    if(game_table[index] != 0 && game_winner == 0) backStep()
    if(game_table[index] == 0 && game_backplayer && game_winner == 0){ 
        game_table[index] = game_step
        value.html(player.img[game_step])      
        checkWinner()                                              
        if(game_step == player.nolik) game_step = player.crestik
        else if(game_step == player.crestik) game_step = player.nolik                 
        game_title.text('Сейчас ходит : ' + player.name[game_step])
        if(game_winner != 0) game_title.text('Игру выиграл: ' + player.name[game_winner]) 
        game_backplayer = false 
        console.log('BackStep: game_winner',game_winner,'last step: ',game_table[index]);
    }    
}