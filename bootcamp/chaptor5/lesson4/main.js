const str = 'Привет всем, меня зовут Саня. Мне 24 года. Я живу в городе 1 Бишкек.'
const regex = /Саня/
const result = str.match(regex)
console.log('regex',result[0]);
//
// const str2 = 'Привет всем, меня зовут Саня. Мне 24 года. Я живу в городе 12 Бишкек.'
// const regex2 = /\d\d/g
// const result2 = str2.match(regex2)
// console.log(result2);
// //
// const str3 = 'Привет всем, меня зовут Саня. Мне 24 года. Я живу в городе 12 Бишкек.'
// const regex3 = /\S\S\S\S/g
// const result3 = str3.match(regex3)
// console.log(result3);
// //
// const str4 = 'Привет всем, меня зовут Саня. Мне 24 года. Я живу в городе 12 Бишкек.'
// const regex4 = /....\./
// const result4 = str4.match(regex4)
// console.log(result4);
// //
const str5 = 'Привет всем, меня зовут Саня. Мне 24 года. Я живу в городе 12 Бишкек.'
const regex5 = /\d\d/ 
const result5 = str5.match(regex5)
console.log(result5);
// //
// const str6 = 'К нам пришли Оля и Эля в гости. А Юля не смогла.'
// const regex6 = /[ОЭ]ля/g
// const result6 = str6.match(regex6)
// console.log(result6);
// //
// const str7 = 'К нам пришли Оля и Эля в гости. А Юля не смогла.'
// const regex7 = /[^ОЭ]ля/g
// const result7 = str7.match(regex7)
// console.log(result7);
// //
// const str8 = 'Сегодняшняя дата: 20.08.2020'
// const regex8 = /\d{2}\.\d{2}\.\d{4}/g
// const result8 = str8.match(regex8)
// console.log(result8);
// //
// const str9 = 'К нам пришли Оля и Эля в гости. А Юля не смогла.'
// const regex9 = /юля/gi // i - независимо от регистра
// const result9 = str9.match(regex9)
// console.log(result9);
// //
// const str10 = 'We see you. We need you.'
// const pattern = /We/gi
// const result10 = str10.replace(pattern,'I')
// console.log(result10);
// //
// // const str11 = prompt('Введите слово')
// // const pattern11 = new RegExp(/\d\d/,'gi')
// // const result11 = str11.match(pattern11)
// // console.log(result11);
// //
// // const str12 = prompt('Введите слово')
// // const pattern12 = new RegExp(/[a-zA-Zа-яА-Я0-9]/,'g')
// // const result12 = str12.match(pattern12)
// // console.log(result12);
// //
// // const str13 = prompt('Привет всем, меня зовут Саня. Мне 24 года. Я живу в городе 12 Бишкек.')
// // const pattern13 = new RegExp(/\d+\sгода/,'gi')  
// // const result13 = str13.match(pattern13)
// // console.log(result13);
// //
const str14 = prompt('Введите email.com ')
const pattern14 = new RegExp(/.+@.+\..+/,'g i')  
const result14 = str14.match(pattern14)
console.log(pattern14.test(str14));







