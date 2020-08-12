// // // // Обьекты

// // // let person = {
// // //     name: 'Sanya',
// // //     age: 20,
// // //     childs: ['John','Luci'],
// // //     clothes: {
// // //         shirt: 'black'
// // //     }
// // // }

// // // // Доступ к свойствам обьектов

// // // console.log(person.childs[3])
// // // console.log(person.clothes.shirt)

// // // // add new properties

// // // person.car = 'Toyota'
// // // console.log(person.car)

// // // // change properties

// // // person.age = 21;
// // // console.log(person.age)

// // // // del properties

// // // delete person.childs;

// // // //
// // // console.log(JSON.stringify(person))


// // // Нестандартные названия ключей

// // // const obj = {
// // //     'kebab-case': 'Можно и так записать ключ.',
// // //     0: 0,
// // //     true: 2
// // // }

// // // console.log(obj["kebab-case"])
// // // console.log(obj.true)

// // // const и обьекты

// // const obj = {
// //     name: 'Jack'
// // }

// // obj.name = 'Sanya'
// // obj.car = 'Toyota'

// // console.log(obj.name)
// // console.log(obj.car)
// // console.log(obj={name:'petya'})

// // // 

// // ссЫлочный тип данных

// // let person1 = {
// //     name: 'Sanya',
// //     age: 25
// // }

// // person2.name = 'Petya'
// // delete person1.age

// // console.log(person1)
// // console.log(person2)

// // let obj = {
// //     name: 'Sanya'
// // }
// // let obj2 = {...obj}
// // obj2.name = 'Petya'

// // console.log(obj.name)
// // console.log(obj2.name)

// let array = [1,2,'str',23,4,5,6,7,8,9]

// let b = [...array]

// b[0] = 5
// console.log(b)
// console.log(array)
// console.log(array.length)
// console.log(array[array.length-1])

// console.log(array[2]='STR')
// console.log(array[2])


// // Цикл for

// let arrNums = []
// console.log('Loop FOR')
// for(let i = 0 ; i < 5 ; i++){
//     arrNums[i] = i;
//     console.log(arrNums[i])
// }

// for(let i = 0 ; i < arrNums.length; i++){
//     console.log(arrNums[i]+'=^.^=')
// }

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])    
// }

// let black_list = ['Aktan', 'Aleks', 'Marat']

// let data = ['Kubat', 'Marat', 'Emir','Aktan','Aleks', 'Faiz']

// for(let i = 0 ; i < data.length; i ++){    
//     if(black_list.includes(data[i])) {
//         // console.log(`Контакт ${data[i]} пропущен.`) 
//         continue
//     }
//     console.log(`Контакт ${data[i]} найден.`)
// }

// // while 
// let i = 0
// while(i < 10){
//     console.log(`Проход ` + i++)
// }

// i = 0

// do{
//     console.log('Do: '+ i++)
// }while(false)

// // Методы Массивов

// let someFamily = [
//     {
//         name: 'Marta',
//         position: 'Mother',
//         age: 36
//     },
//     {
//         name: 'Gomer',
//         position: 'Father',
//         age: 40
//     },
//     {
//         name: 'Lisa',
//         position: 'Daughter',
//         age: 8
//     },
//     {
//         name: 'Bart',
//         position: 'Son',
//         age: 10
//     }
// ]

// let newChild = {
//     name: 'Maggie',
//     position: 'Daughter',
//     age: 2
// }


// // someFamily[someFamily.length] = newChild;
// // console.log(someFamily);

// // someFamily.push(newChild)
// // console.log(someFamily);

// // someFamily.pop()
// // console.log(someFamily);

// // someFamily.unshift(newChild)
// // console.log(someFamily);

// // someFamily.shift()
// // console.log(someFamily);

// // console.log('SPLICE');
// // console.log(someFamily);
// // console.log(someFamily.splice(2,1))
// // console.log(someFamily);
// // someFamily.splice(2,0,newChild)
// // someFamily.splice(0,2)
// // console.log(someFamily);

// let slice = someFamily.slice(1,2)
// console.log(someFamily);
// console.log(slice);

// let test = [1,2,3,4,5,6,,7,8,9,0,11,12,13]

// test.splice(4,test.length-1)
// console.log(test);

// let str = 'a,b,c,d,e,f'

// let arr = str.split(',')
// console.log(arr);
// console.log(arr.join(' - '));

// let recucler = []
// for(let i = 0; i < 100; i++) recucler.push(i)
// console.log(recucler)

// recucler.sort((a,b) => a + 20 - b)
// console.log(recucler);

// let arrStr = ['JavaScript','Sanya','Python','C','Java','PHP']
// console.log(arrStr.sort((a,b) => b.length - a.length))

let split = prompt('Set String')
let arr = split.split(' ')
console.log(arr);
console.log(arr.join(' '));

