// // // console.log('Hello');

// // let example = 1;
// // let exstring = "String Example";
// // let example2 = 'Example2';
// // let a = 5;
// // let b = 20;
// // let c = a + b;
// // let camelCase = 'D';
// // let hello_world = 'Hellow world'
// // let set1 = 1;
// // let $hello = "Hello Dollar"
// // let _hello = 'Hello Down border';

// const conts = 1;
// console.log(conts)


// // Типы данных


// // String

// let string = 'String';
// let string2 = `String\n\tDown\n\t\tDown`;
// console.log(string2);

// // Number

// let number = 123;
// let number2 = 123.25;
// console.log(number+number2);
// /*
// multiComment
// */

// // Boolean

// let booleanT = true;
// let booleanF = false;
// console.log(booleanF)

// // n4 Undefined

// let a = undefined;
// console.log(a + 5);

// // NULL

// let b = null;
// console.log(b);

// // object

// let object = {
//     name: 'Sanya',
//     age: 24,
//     email: 'alexandercom445@gmail.com',
//     hobby: {
//         key: 2
//     },
//     dog: {
//         name: 'Sharik',
//         color: {
//             fon: ['22',33,44,{
//                 r:1,
//                 g:2
//             }],
//             main: 10
//         },
//         age: 20
//     }
// };

// let x = 'name';
// console.log(object.name);
// console.log(object);
// console.log(object.dog.color.fon[object.dog.color.fon.length-1].g);

// // Arrow

// let arrow = [
//     {
//         name: 'ArrowUser'
//     },1,2,3,4,5,6,7,8,9,10
// ]

// console.log(arrow.length);
// console.log(arrow[0].name);
// console.log(arrow[(arrow.length-1)]);
// console.log(arrow[9]); 

// let arrlist = []

// arrlist[0] = 1;
// arrlist[1] = 2;

// console.log(arrlist[1])

// // математические операторы
// console.log('Математические операторы')
// console.log('Вводные: 5 и 5')
// console.log('+ '+(5+5))
// console.log('- '+(5-5))
// console.log('* '+(5*5))
// console.log('/ '+(5/5))
// console.log('% '+(6%5))
// console.log('10-10a '+(10 - '10a'))

// a = 10;
// console.log(a++)
// console.log(a)

// console.log(' typeof '+typeof(a))
// console.log(' typeof '+typeof(NaN))
// console.log(' typeof Infinity '+typeof(Infinity))
// console.log(' isNaN ' + isNaN(10))

// console.log(parseInt(15))
// console.log(parseInt('123dsadsa'))
// console.log(typeof(parseInt('123dsadsa')))
// console.log(parseFloat('123.55dsadsa'))

// console.log( 5 > 4 )

// // Нестрогое сравнение

// console.log(10 == 10)
// console.log(10 == '10')

// // строгое сравние

// console.log(10 === 10)
// console.log(10 === '10')

// Логические операторы

// console.log(true && false)
// console.log(false || false)
// console.log(false || false)
// console.log(!false)

console.log(true && false)
console.log(true || false)

{
    let str = "string Local"
    alert(str)
    let a,b
    a = 10
    b = a
    console.log(b)
}
let age = confirm('You age > 18?')
console.log(age)
let pro = prompt("You name?")
console.log(pro)

let ohh = {
    name: prompt('ohh:Name')
}
let json = JSON.stringify(ohh)
console.log(json)
console.log(ohh.name)

let jsonpar = JSON.parse(json)
console.log(jsonpar)