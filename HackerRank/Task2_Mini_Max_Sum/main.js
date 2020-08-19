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
    let res = 0;
    let arrRes = []
    for(let i = 0; i < arr.length; i++){
        res += arr[i]
    }
    for(let i = 0; i < arr.length; i++){
        res -= arr[i]
        arrRes[i] = res
        res += arr[i]
    }
    arrRes.sort()
    return arrRes[0]+' '+arrRes[arrRes.length-1]
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
    console.log(miniMaxSum(arr));
}
