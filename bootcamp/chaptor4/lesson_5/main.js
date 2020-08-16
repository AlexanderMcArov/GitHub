// 1. Если содержимое переменной result равна 23, то выведите 'Верно', иначе
// выведите 'Неверно'.
// 2. Если содержимое переменной result больше 23 и меньше 40, выведите ‘Hello’,
// иначе выведите ‘Goodbye’.
// 3. Сделайте 2-e задание используя Условный (тернарный) оператор.
let result = parseInt(prompt('Введите число'))
result == 23 ? alert('Verno'): alert('Neverno')
result > 23 && result  < 40 ? alert('Hello') : alert('Goodbye')
console.log('Task 1-3');
// 4. Есть переменная seasons, если пользователь ввел цифру 1, то выведите
// сообщение ‘зима’, если 2-’весна’, если 3-лето, 4-осень. Используйте Конструкцию
// ‘Switch’
console.log('Task 4');
let seasons = ["Зима","Весна","Лето","Осень"]
alert(seasons[parseInt(prompt('Введите число.'))])

// 5. Используя цикл for вывести все четные числа от 1 до 100;
console.log('Task 5');
for(let i = 1; i <= 100;i++) i%2==0 ? console.log(i) : i

// 6. Есть переменная res, если пользователь вводит текст и первая буква текста
// начинается с ‘a’, то выведите сообщение ‘да’, иначе ‘нет’. Например:
// let res = +prompt(‘наберите текст’) // пример ввода: ‘abcd’
// Сделайте используя if else, затем используя Условный оператор
console.log('Task 6');
let res = prompt('Введите текст')
res.split('')
if(res[0] == 'а' || res[0] == 'a') alert(res)

// 7. Дан массив с элементами [8,3,2,1,3,4]. С помощью цикла for выведите все
// элементы в консоль.
console.log('Task 7');
let arr7 = [8,3,2,1,3,4]
for(let i = 0; i < arr7.length;i++) console.log(arr7[i]);

// 8. Дан массив с элементами [1,5,2,3]. С помощью цикла найдите сумму этого
// массива.
console.log('Task 8');
let arr8 = [1,5,2,3]
res = 0;
for(let i = 0; i < arr8.length; i++) res += arr8[i]
console.log(res);

// 9. Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
console.log('Task 9');
let arr9 = ['a','б','в']
let arr9_2 = [4,3,5,5]
for(let i = 0; i < arr9_2.length; i++){
    arr9.push(arr9_2[i])
}
console.log(arr9);

// 10. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

console.log('Task 10');

let arr10 = [1, 2, 3];
let arr10_2 = [4, 5, 6];
for(let i = 0; i < arr10_2.length;i++) {
    arr10.push(arr10_2[i])
}
console.log(arr10);

// 11. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
console.log('Task 11');
let arr11 = [1, 2, 3];
let arr11_2 = [4, 5, 6];
for(let i = arr11.length-1; i >= 0;i--) arr11.unshift(arr11_2[i])
console.log(arr11);

// 12. Дан массив [7, 8, 9, 4, 5]. С помощью метода slice запишите в новую переменную
// элементы [7, 8, 9].
console.log('Task 12');
let arr12 = [7,8,9,4,5]
let arr12_2 = arr12.slice(0,3)
console.log(arr12_2);

// 13. Дан массив [12, 3, 21, 3, 4, 6]. С помощью метода splice запишите в новый
// массив элементы [21, 3, 4]
console.log('Task 13');
let arr13 = [12,3,21,3,4,6]
let arr13_2 = [21,3,4]

for(let i = 0; i < arr13_2.length;i++){
    arr13.splice(arr13.length,0,arr13_2[i])
}
console.log(arr13);

// 14. Дан массив [23, 12, 1, 14, 5]. С помощью метода splice сделайте из него массив
// [23, 12, 1, 'a', 'b', 'c', 14, 5].

console.log('Task 14');
let arr14 = [23, 12, 1, 14, 5]
let arr14_2 = ['a','b','c']

for(let i = arr14_2.length-1; i >= 0;i--){
    arr14.splice(2,0,arr14_2[i])
}
console.log(arr14);

// 15. Дан массив ['php', 'js', 'python',’java’]. Удалите и выведите на экран первый
// элемент. Удалите и выведите на экран последний элемент.

console.log('Task 15');
let arr15 = ['php', 'js', 'python','java']

console.log(arr15.shift());
console.log(arr15.pop());

console.log(__dirname);