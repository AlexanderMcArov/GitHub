// //  c

// // if(2>2){

// // }else if(2>1){

// // }else{

// // }
// // let a,b
// // a = 15
// // b = 5

// // let obj = {
// //     sum: a+b,
// //     dis: a-b,
// //     multi: a*b,
// //     diff: a/b,
// // }
// // let str = a+' + '+b+'='+obj.sum+'\n'
// // let str1 = a+' - '+b+'='+obj.dis+'\n'
// // let str2 = a+' * '+b+'='+obj.multi+'\n'
// // let str3 = a+' / '+b+'='+obj.diff+'\n'
// // alert(str+str1+str2+str3)

// let age = parseInt(prompt("Input your age."))
// let name = prompt("Input your Name").toLocaleLowerCase()

// if( age > 18 && name == "sanya"){
//     alert('Admin join')
// }else if( age <= 18 ){
//     alert('Доступ запрещен.')
// }else{
//     alert('Goobye ' + name)
// }

// // условный оператор switch 


// // switch(prompt('SetSwitch valeu')){
// //     case 1: alert('SRABOTALO 1!!!')
// //     break;
// //     case 2: alert('SRABOTALO 2!!!')
// //     break;
// //     case 3: alert('SRABOTALO 3!!!')
// //     break;
// //     case 4: alert('SRABOTALO 4!!!')
// //     break;
// //     default: alert('DEFAULT')
// // }

// let age = parseInt(prompt('You age'))
// switch(age){
//     case 6: alert('Посмотрите Шрек')
//     break;
//     case 15: alert('Посмотрите Наруто')
//     break;
//     case 20: alert('Посмотрите Дед Пул')
//     break;
//     default: alert('Посмотрите Ну погоди')
// }

// Тернарный оператор

let age = +prompt('Введите Ваш возраст')
let name = 2
// условие ? выражение 1: выражение 2

age >= 18 ? alert('age>18') : alert('alert<18')
age >= 18 ? age += 5 : age -= 10
// alert(age)

let ruselt = age >= 18 ? age += 5 : age -= 10
alert(ruselt)

if(age >= 18) age += 5
else age -= 5

console.log( 10 + +'120' )