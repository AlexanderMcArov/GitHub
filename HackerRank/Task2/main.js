'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let max = arr[0]
    let min = arr[0]
    let summ = arr[0];
    for(let i = 1; i < arr.length; i++){
        summ += arr[i];
    }
    for(let i = 0; i < arr.length; i++){
        summ -= arr[i]
        max = Math.max(summ,max)
        min = Math.min(summ,max)
        summ += arr[i]
    }
    return min+' '+max
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
    console.log(miniMaxSum(arr));
}
