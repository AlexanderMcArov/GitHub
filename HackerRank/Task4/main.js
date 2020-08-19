// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// // Complete the isBalanced function below.
// function isBalanced(s) {


// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const t = parseInt(readLine(), 10);

//     for (let tItr = 0; tItr < t; tItr++) {
//         const s = readLine();

//         let result = isBalanced(s);

//         ws.write(result + "\n");
//     }

//     ws.end();
// }

let s = [
    '{[()]}',
    '{[(])}',
    '{(([])[])[]}{'
]

function isBalanced(s){
    s = s.split('')
    let len = s.length 
    let arrOpenBrackets = [] 
    // if((len % 2) != 0 ) return 'NO'
    for(let i = 0; i < len; i++){
            if(s[i] == '{' || s[i] == '[' || s[i] == '(') arrOpenBrackets.push(s[i])  
            else if(s[i] == '}'){
                if(arrOpenBrackets[arrOpenBrackets.length-1] == '{') arrOpenBrackets.pop()                               
            }else if(s[i] == ']'){
                if(arrOpenBrackets[arrOpenBrackets.length-1] == '[') arrOpenBrackets.pop()                
            }else if(s[i] == ')'){
                if(arrOpenBrackets[arrOpenBrackets.length-1] == '(') arrOpenBrackets.pop()                 
            }   
        }      
    return arrOpenBrackets.length != 0 ? 'NO' : 'YES'
}

console.log(isBalanced(s[2]));

