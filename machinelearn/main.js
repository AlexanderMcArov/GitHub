let arr = [2,0,2,0,1,0,0,0,0] // frind,cola,rain
// let we = [+Math.random().toFixed(2),+Math.random().toFixed(2),+Math.random().toFixed(2)]
let we = [1, 0.2, 0.3, 0.4, 0.5, 0.2, 0.3, 0.4, 0.5]

let a = []
let res = 0
let res2 = 0
let err = 0
function test(){
    for(let i in arr){
        a.push(arr[i]*we[i])
    }
    res = a.reduce((a,b)=>a+b)
    res2 = we.reduce((a,b)=>a+b)
    err = (res2 - 1)/we.length
    console.log(err);
    for(let i in arr){
        we[i] = +(we[i] - err).toFixed(1)
    }
}
console.log(res);
console.log(a);
console.log(we);