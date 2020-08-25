// Task 1
// Дан массив с числами. Вам нужно создать новый массив,
// состоящий из квадратов этих чисел.
let arr1 = [1,2,3,4,5,6]
let arr1_res = []
arr1.forEach(item => arr1_res.push(item * item))
console.log('Task 1 : ',arr1_res);

// Task 2
// Дан массив с числами. Найти сумму этих чисел.
let arr2 = [1,2,3,4,5,6,7]
let arr2_res = 0
arr2.forEach(item => arr2_res += item)
console.log('Task 2 : ',arr2_res);

// Task 3
// Дан массив с числами. Сделать из него массив, состоящий из
// квадратов этих чисел.
let arr3 = [1,2,3,4,5,6]
let arr3_res = arr1.map(item => item * item)
console.log('Task 3 : ',arr3_res);

// Task 4
// Дан массив с числами. Оставить в нем только отрицательные
// числа.
let arr4 = [1,-2,3,-4,5,6]
let arr4_res = arr4.filter(item => item<0)
console.log('Task 4 : ',arr4_res.length);

// Task 5
// Дан массив с числами. Извлечь в нем только нечетные числа.

let arr5 = [1,2,3,4,5,6,7,8,9,0,10,12,13,15]
let arr5_res = arr5.filter(item => {
    return item % 2 != 0 ? item : false
})
console.log('Task 5 : ',arr5_res);

// Task 6
// Дан массив со строками. Убрать в нем только те строки, длина
// которых меньше 5-ти символов.

let arr6 = 'Дан массив со строками Убрать в нем только те строки длина которых меньше пяти символов'
arr6 = arr6.split(' ')
let arr6_res = arr6.filter(item => item.length > 5)
arr6 = arr6_res
console.log('Task 6:',arr6);

// Task 7
// Дан массив, в нем могут быть обычные элементы и
// подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем
// только подмассивы.

let arr7 = [1,2,[3,4],5,[6,7]]
function getSubArray(arr){
    let result = arr.filter(item => Array.isArray(item))
    arr7 = result
    return arr7
}
console.log('Task 7',getSubArray(arr7));

// Task 8
// Дан массив с числами. Вывести количество отрицательных
// чисел в этом массиве.
let arr8 = [1,-2,3,-4,5,6]
let count = 0
let arr8_res = arr8.filter(item => {
    if(item < 0){
        count++
        return item
    }
})
console.log('Task 8 ',arr8_res.length);
console.log('Task 8 ',count);

// Task 9
// Дан массив с числами. Найти сумму этих чисел.
let arr9 = [1,-2,3,-4,5,6]
let arr9_res = arr9.reduce((summ,item) => summ + item)
console.log('Task 9',arr9_res);

// Task 10
// Дан массив с числами. Найдите сумму первых N элементов до
// первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3
// элемента, так как дальше стоит элемент с числом 0.
let arr10 = [1, 5, 2, 0, 4, 5, 6]
let arr10_res = 0
arr10.reduce((summ,item) => {
    if(item == 0) return arr10_res = summ
    else return summ + item
})
console.log('Task 10',arr10_res);

// Task 11
// 11.Дан массив с числами. Сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось больше 10-ти?

let arr11 = [1, 5, 2, 5, 4, 5, 6]
let arr11_res = 0
arr11.reduce((summ,item,index) => {
    if(summ > 10) return arr11_res = index
    else return summ + item
})
console.log('Task 11',arr11_res);

// Task 12
// Дан массив с числами. Оставьте в нем только положительные
// числа. Извлеките квадратный корень и этих чисел. (Подсказка:
// исп. методы: filter,map).

let arr12 = [1,-2,3,-4,5,9]
let arr12_res = arr12.filter(item => item > 0)
let res = arr12_res.map(item => Math.sqrt(item))
console.log('Task 12',res);

// Task 13
// 13.Напишите функцию compareNumbers(arr), которая
// возвращает массив, элементы которого отсортированы по
// убыванию.
let arr13 = [1,-2,3,-4,5,6]
function compareNumbers(arr){
    arr.sort((a,b) => b - a)
    return arr
}
console.log('Task 13',compareNumbers(arr13));

//Task 14
// 14.Напишите функцию removeElem (arr, num), которая удаляет
// определенный элемент из массива.
let arr14 = [1,-2,3,-4,5,6]
console.log(arr14);
function removeElem(arr, num){
    arr.splice(num,1)
    return arr
}
console.log('Task 14',removeElem(arr14,4));
