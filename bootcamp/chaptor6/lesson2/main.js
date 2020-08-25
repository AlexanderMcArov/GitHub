console.log('Lesson 2');


// Дан массив с числами. Вам нужно создать новый массив,
// состоящий из квадратов этих чисел.

let arr1 = [1,2,3,4,5,6]
let arr2 = arr1.map(item => item * item)
console.log(arr2);


// Дан массив с числами. Вывести количество отрицательных
// чисел в этом массиве.

let arr3 = [1,-2,3,-4,5,6]
let arr3_res = arr3.filter(item => item<0)
console.log(arr3_res.length);

// Дан массив с числами. Найдите сумму первых N элементов до
// первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3
// элемента, так как дальше стоит элемент с числом 0.

let arr4 = [1,2,3,0,4,5,6]
let res = 0
arr4.reduce((sum,item)=> {
    if(item == 0) return res = sum
    else return sum + item
})
console.log(res);