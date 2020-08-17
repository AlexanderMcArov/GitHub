'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
    // n - количество шагов
    // s - параметры шагов 
    /*
    Вернуть количество полигонов , ниже уровня моря.
    */
function countingValleys(n, s) {
    let lvl = 0;
    let valley = false;
    let count = 0;
    
    s = s.split('')
    for(let i = 0; i < s.length;i++){
        if(s[i] == 'U') lvl++
        else if(s[i] == 'D') lvl--
        console.log(lvl);
        if(lvl < 0) valley = true;
        else if(lvl == 0 && valley == true){
            valley = false;
            count++;
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
