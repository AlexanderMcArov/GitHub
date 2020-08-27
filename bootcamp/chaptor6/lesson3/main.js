// // // console.log('Week6 Lesson3');

// // // let list = [
// // //     'Соль',
// // //     'Фасоль',
// // //     'Масло',
// // //     'Гречка',
// // //     'Сахар'
// // // ]


// // // let [first,second,...other] = list

// // // console.log(first);

// // // let arr = [
// // //     [0,1,2,3,4],
// // //     [5,6,7,8,9]
// // // ]

// // // let [[a,b,c,d,e],arr2] = arr

// // // console.log(d);


// // // let person = {
// // //     name: 'Sanya',
// // //     age: 24,
// // //     job: 'IT',
// // //     skills:{
// // //         js: 40,
// // //         html: 50,
// // //         css: 70
// // //     }
// // // }

// // // let {name,job,age} = person
// // // let {skills:{js}} = person

// // // console.log(name,job,age);
// // // console.log(js);

// // // let obj2 = {
// // //     arr:[
// // //         {
// // //             name3:'Sanya'
// // //         }
// // //     ]
// // // }

// // // let {arr:[{ name3 }]} = obj2
// // // console.log(name);

// // // function foo({nameStambek}) {
// // //     console.log(nameStambek);
// // // }

// // // let obj5 = {
// // //     nameStambek: 'Stambek'
// // // }

// // // foo(obj5)


// // // let objk = [0,1,2,3,4,5,6]
// // // let [,,,newArr] = objk
// // // console.log(newArr);
// // // // console.log(...objk);

// // // function bar(a,b,c,d,e,f,g,h){
// // //     console.log(a,b,c,d,e,f,g,h);
// // // }

// // // bar(...objk)


// // // function sortMe(a,b) {
// // //     let result = a - b
// // //     if(result < 0) return a 
// // //     else return b
// // // }
// // // console.log(sortMe(6,5));


// // // let object1 = {
// // //     name: 'Sanya'
// // // }
// // // let object2 = {...object1}
// // // console.log(object1.name);

// // // // object2.name = 'Aktan'

// // // console.log(object1.name);
// // // console.log(object2.name);

// // // let boj22 = {
// // //     Name: 'Kubic',
// // //     color: 'black',
// // //     xyz: [50,60,70]
// // // }

// // // let boj32 = {
// // //     LastName: 'Rubik'
// // // }

// // // let boj42 = {...boj22, ...boj32}
// // // console.log(boj42);


// // // // let as = {}
// // // // let bs = as
// // // // as.bs = bs
// // // // console.log(bs);


// let obiect = {
//     name:'Sanya',
//     age: 22,
//     position:[
//         'mentor',
//         'developer',
//         'team lead',
//         'project manager'
//     ],
//     dog:{
//         name: 'Laika',
//         age: 2
//     }
// }

// // let {
// //     name,
// //     age,
// //     // dog:{
// //     //     name: dogName
// //     // },
// //     positions:[
// //         firstPosition,
// //         secondPosition,
// //         ...otherPositions
// //     ]
// // } = obiect

// // console.log(name,positions);

// function sayHello({name,age,position:[first]}) {
//     console.log(
//         `Hello,i'm ${name},
//         I'm ${age} y.o,
//         My dog ${first}`
//     );
// }

// sayHello(obiect)


// console.log();

// let {log:print} = console

// print('Lol')

// print(console)


// console.timeStamp('dsa')

// console.warn('INFO')


// let actan = {
//     name: 'Aktan',
//     age: 20
// }

// let c = actan
// c.name = 'Kubat'

// console.log(c);
// console.log(name);

let array = [1,2,3]
let [a,b,c] = array

function func(arr) {
    return a
}

console.log(a);

console.log(window);


let arr = ['Aktan','Kubat','Aleksandr']

function destruct(arr,i=0) {
    if(i === arr.length) return
    if(Array.isArray(arr[i])) destruct(arr[i])
    else window[`${arr[i]}`] = arr[i]
    destruct(arr, i + 1)
    return window[`${arr[i]}`]
}

destruct(arr)
window.avto = function auto(a) {
    return a
}
console.log(Aktan,Kubat,Aleksandr);

function setName(a) {
    return a
}