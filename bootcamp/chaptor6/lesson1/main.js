let arr = [1,2,3,4,5,6,7,8,9,10]

// // filter возвращает новый массив
// // его callback функция возвращает true или false
// // if(true) добавит элемент в новый массив else не добавит
// let arr2 = arr.filter((item,index,arr) => {
//     // return item > 4
//     // return item % 2 == 0
//     return item % 2 != 0
// })

// console.log(arr);
// console.log(arr2);


// let str = 'Иван,Миша,Андрей,Олег,Актан'
// str = str.split(',')
// console.log(str);
// let result = str.filter((item,index,arr) => {
//     console.log(item+index+arr);
//     // return item.length > 4
//     return item=='Иван'
// })
// console.log(result);


// let arr2 = [];
// arr.forEach(item => arr2.push(item + 1));
// console.log(arr2);


// // map() работает так же как и forEach() но возвращает какие-то значения (новый массив)
// let arr = [1,2,3,4,5,6,7]
// arr.map((item, index, arr) => {
//     item += 1
// })

// console.log(arr);

// let arr2 = arr.map(item => {
//     return item *2
// })
// console.log(arr2);


// // indexOf() 
// let arr2 = [1,2,3,4,5,6,7,8,9,10]
let str2 = 'Иван,Миша,Андрей,Олег,Актан,Петя'
str2 = str2.split(',')
console.log(str2);
let arr2 = str2.map((item, index) => {
    item.length == 4 ? console.log(item , index) : '';
})
console.log(arr2);

let koll = [
    {
        name: 'Jaina'
    },
    {
        name: 'Jamilya'
    },
    {
        name: 'Sanya'
    },
    {
        name: 'Kubat'
    },
    {
        name: 'Rinat'
    }
]
console.log(koll.findIndex(item => item.name == 'Sanya'));
console.log(koll.find(item => item.name == 'Rinat'));
// // str2 = arr2.split(',')
// let indexOf = arr.indexOf(8)
// // let indexStr = str2.indexOf('Олег',3)
// console.log('Индекс : ' + indexOf);
// // console.log(`Индекс : ${str2[indexStr]} , равен: ${indexStr}`)

// // findIndex() -- принимает массив и возвращает индекс элемента который в условии

// let index2 = str2.findIndex((item,index,arr) => {
//     return item.length == 5
// })

// console.log(index2,str2[index2]);

// .every -- возвращает если все элементы массива совпадают с условиями
// let arr = [1,3,5,7,8,10,12,15,24]
// let res = arr.every((item,index,arr) => {
//     return typeof item === 'number'
// })
// console.log(res);

// .some возвращает true если хотябы один элемент совпадает с условием
// let arr = [1,3,5,7,8,10,12,15,24,'10']
// let res = arr.some((item,index,arr) => {
//     return item === '10'
// })
// console.log(res);
// console.log(arr.some( item => typeof item == 'string'));


// reduce
// перебирает массив и возвращает сумму элементов
let arr = [1,2,3,4,5,6,7,8,9]
let res = arr.reduce((a,b,index) => {
    return a + b
},45)

console.log(res);

let arr = [1,2,3,4,5,6,7,8]
let arr2 = [2,3]
arr2.forEach((item,index,arr) => {
    arr.includes(item) ? console.log(item) : ''    
})

// почему case от 1 до 5 проверяет пачкой и в 5 case условие


let arr = [4,15,-4,27,12,8]
function max(list){
    let max = list[0]
    list.forEach(function(e){
        if(e > max) max = e
    })
    return max
}

console.log(max(arr));