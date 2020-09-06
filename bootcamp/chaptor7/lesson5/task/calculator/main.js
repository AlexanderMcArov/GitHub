let previous = ''
let current = ''
let step = 0
let calcRes = 0
let result = $('div.result')
let moves = ['+','-','/','*']
function getNumber(params) {
    if(step == 0){
        previous += params
        result.empty()
        result.append(previous)
        console.log(previous);
    }else{
        current += params
        result.empty()
        result.append(current)
        console.log(current);
    }
}

function getSumm(){
    step = 1
    result.append(' + ')    
}

function getDeff() {
    step = 2
    result.append(' - ')    
}

function getDivid() {
    step = 3
    result.append(' : ')
}

function getMulti() {
    step = 4
    result.append(' * ')
}

function calcReset() {
    step = 0
    calcRes = 0
    result.empty()
    previous = ''
    current = ''
}
function setResult() {
    if(step == 1) calcRes = parseInt(previous) + parseInt(current)
    else if(step == 2) calcRes = parseInt(previous) - parseInt(current)
    else if(step == 3) calcRes = parseInt(previous) / parseInt(current)
    else if(step == 4) calcRes = parseInt(previous) * parseInt(current)
    console.log(calcRes);
    result.empty()
    lastResult = calcRes
    result.append(calcRes)
    $('.result_init').append(`${previous} ${moves[step-1]} ${current} = ${calcRes}`)
    $('.result_init').append('<br>')
    step = 0
    calcRes = 0
    previous = ''
    current = ''
}

