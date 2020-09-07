let arr = [0,0,2,0,1,0,0,0,0] // frind,cola,rain
// let we = [+Math.random().toFixed(2),+Math.random().toFixed(2),+Math.random().toFixed(2)]
let we = [1, 0.2, 0.3, 0.4, 0.5, 0.2, 0.3, 0.4, 0.5]

let a = []
for(let i in arr){
    a.push(arr[i]*we[i])
}
let res = a.reduce((a,b)=>a+b)
let res2 = we.reduce((a,b)=>a+b)
let err = (res2 - 1)/we.length
console.log(err);
for(let i in arr){
    we[i] = +(we[i] - err).toFixed(1)
}
console.log(res);
console.log(a);
console.log(we);