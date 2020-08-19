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

// Complete the isBalanced function below.
function isBalanced(s){
    if(s.split('').length % 2 != 0) return 'NO'
    s = s.split('')
    let check = []
    for(let i = 0; i < s.length; i++){
        if(s[i] == '{' || s[i] == '[' || s[i] == '('){
            check.push(s[i])
        }else if(s[i] == '}'){
            if(check[check.length-1] == '{') check.pop()
            else return 'NO'
        }else if(s[i] == ']'){
            if(check[check.length-1] == '[') check.pop()
            else return 'NO'
        }else if(s[i] == ')'){
            if(check[check.length-1] == '(') check.pop()
            else return 'NO'
        }
    }
    return check.length != 0 ? 'NO' : 'YES'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();
        console.log(s)
        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
