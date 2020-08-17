// let num1 = 50;
// let num3 = 10;

// function calcum (a, b){
//     res = a + b
//     return res
//     // return num1 + num2
// }

// // calcum() -- возвращает на место вызова

// console.log(calcum(num1,num3));
// console.log(res);

// for(let i = 0; i < 100;i++){
//     calcum(i,i)
// }

// for(let i = 0; i < calcum(5,6);i++){
//     console.log(i);
// }


// function expression ( Анонимная функция )

// let name = function(a,b){
//     let res = a + b
//     return res
// }

// console.log(name(1,2)); 

// let calsum = function(a,b){
//     console.log(a + b);
//     return a + b
// }

// calsum(5,6)

// Hoisting - процесс поднятия

// console.log(num);
// var num = 5
// let command = "comand1"

// switch (command) {
//     case 'comand1':
//         console.log('Case1');        
//         break;

//     default:
//         break;
// }

// function getname(a,b){
//     return a + b
// }


// let obj = {
//     name: getname(5,6)
// }
// var calcum = function(a,b){
//     console.log(a + b);
// }

// calcum(1,2)
// console.log(obj.name);


// область видимости
let getDistanceToPoint = function(x,y,x2,y2){
    return Math.sqrt((x+y)*2+(x2+y2)*2)
}

console.log(getDistanceToPoint(2,3,7,8));

function checsum(){
    let a = +prompt('Set Num1');
    let b = +prompt('Set Num2');
    return a + b;
}

let count = 2;

alert(+prompt('SetNum'));
function counter(){
    let count = 0;
    console.log(count);
    count++;
    console.log(count);
}
function counter2(a){
    let count = a;
    count++;
    console.log(count);
}

let array = [1,2,3,4,5,6,11,7,8,9,0,10]
for( let i = 0;i < array.length;i++){
    counter2(array[i]);
}
console.log(array[2]);

// function main(){
//     console.log(checsum());
//     return checsum()
// }

// counter();
// counter2();
// console.log(count);


// let aman = 'Aman'

// function jik(){
//     let aman = 'Sanya'
//     console.log(aman);

//     function jik2(){
//         let aman = 'Aktan'
//         console.log(aman);
//     }
//     jik2();
// }

// console.log(aman);
// jik();

function cheksum(a, b = 0){
    console.log(a + b);
}

cheksum(5,5)


let arr = prompt('Set string')
arr = arr.split(' ')
console.log(arr);


function someFunc(a,b,c,d,e,p=0){
    console.log(arguments);
    p = Math.max(a,b)
    console.log(p);
    console.log(c.name);
}
let arrs = []
someFunc(2,3,{name:'Name'},5,6)
console.log(arrs);
function addArray(a,arr){
    for(let i = 0; i < a; i++){
        arr[i] = i
    }
}
addArray(10,arrs)
console.log(arrs);