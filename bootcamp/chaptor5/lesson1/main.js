<<<<<<< HEAD
console.log('./main.js');

let task = 1;

function taskCount(){
    console.log('// Task ' + task);
    task++;
}

taskCount(); // 1
function hello1(){
    console.log('Привет, JavaScript!');
}
hello1();

taskCount(); // 2
function hello2(name){
    if(!name) console.log('Привет, гость.');
    else console.log('Привет, ' + name);
}
hello2(prompt('Введите имя:'));

taskCount(); // 3
function rgb(r = 0, g = 0, b = 0){
    return `rgb(${r},${g},${b})`
}
console.log(rgb(22,22,22));

taskCount(); // 4
function countryName(countries){
    let max_name = countries[0].length;
    let min_name = countries[0].length;

    let max_index = 0;
    let min_index = 0;


    for(let i = 1; i < countries.length; i++){
        if(countries[i].length > max_name){
            max_name = countries[i].length
            max_index = i
        }

        if(countries[i].length < min_name){
            min_name = countries[i].length
            min_index = i
        }
    }
    return [countries[max_index], countries[min_index]]
}
let arrCountry = [
    'Kyrgyzstan',
    'USA',
    'Russia',
    'Norvegia',
    'Ruminia',
    'Ruminia',
    'Bolgariya'
]

console.log(countryName(arrCountry))

taskCount(); // 5
function getCountSymbol(string,symbol){
    string = string.split('');
    let count = 0;
    for(let i = 0; i < string.length;i++){
        if(string[i] == symbol) count++;
    }
    return `Количество символов '${symbol}' в строке '${string.join('')}' = ${count}`;
}
console.log(getCountSymbol('строкаполавыоплавоплаволп','о'));

taskCount(); // 6
function factorial(number){
    let numberSumm = 1;
    for(let i = 1; i <= number; i++){
        numberSumm *= i;
    }
    return numberSumm
}
console.log('Factorial - ' + factorial(5));

taskCount(); // 7
function getNumbers(x,y){
    let arr = []
    if(x > y){
        for(let i = x; i >= y; i--){
            arr.push(i)
        }
    }else{
        for(let i = x; i <= y; i++){
            arr.push(i)
        }
    }
        
    return arr
}
console.log(getNumbers(20,-20));


// function rgb(a = 0, b = 0, c = 0){
//     return `rgb(${a},${b},${c})`
// }
// console.log(rgb(+prompt('Введите первое число:'),+prompt('Введите второе число:'),+prompt('Введите число число:')));
=======
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
>>>>>>> e67bf6a658d1671edd2890ffca6ba175c1d16749
