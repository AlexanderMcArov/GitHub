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