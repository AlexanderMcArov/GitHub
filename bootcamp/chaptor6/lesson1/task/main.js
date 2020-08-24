// Task 1
// Написать функцию, которая получает в качестве параметра массив, затем перебирает все
// его элементы и выводит на экран, какая информация содержится в каждом элементе: число или
// не число.
// Массив для примера: [&quot;Молоко&quot;, 77, 11, &quot;Мед&quot;, -88];

let arr1 = ['Молоко',77,11,'Мед',-88]
function typeArr(arr){
    arr.forEach(item => {
        console.log('Task 1 ', item,typeof(item));
    });
}

typeArr(arr1)

// Task 2
// Напишите функцию, которая определяет максимальный элемент массива. Нельзя
// использовать sort().
// Массив для примера: [4, 15, -4, 27, 12, 8]

let arr2 = [4,15,-4,27,12,8]
function maxItem(arr){
    let max = arr[0]
    arr.forEach((item) => max = Math.max(max,item))
    return max
}

console.log('Task 2',maxItem(arr2));

// //Task 3
// Напишите функцию, определяющую количество максимальных элементов в массиве.
// Массив для примера: [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]

let arr3 = [4,5,5,5,3,5,2,3,1,3,4]
function maxItemCount(arr){
    let count = 0
    let max = maxItem(arr)
    arr.forEach(item => item == max ? count++ : false)
    return count    
}

console.log('Task 3',maxItemCount(arr3));

// // Task 4
// Напишите функцию, определяющую, присутствует ли заданный элемент в массиве. В
// качестве результата работы функции можно выдавать логическое значение true и индекс этого
// элемента, если элемент найден, и false — в противном случае.
// Массив для примера: [‘Молоко’, 20, 40, “дом”, 30]
// Искомый элемент: 40

let arr4 = ['Молоко',20,40,'дом',30]

function checkItem(arr,element = 0){
    return arr.some(item => item == element)
}

console.log('Task 4',checkItem(arr4,'дом'));
console.log('Task 4',checkItem(arr4,'15'));

// Task 5
// Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел методом forEach() и методом
// reduce() и map().

let arr5 = [5,6,7,8,9]

function summForEach(arr){
    let sum = 0
    arr.forEach(item => sum += item)
    return sum
}

function sumReduce(arr){    
    let sumReduce = arr5.reduce((a,b) => {
        return a + b
    })
    return sumReduce
}

function sumMap(arr){
    let sum = 0
    arr.map(item => sum += item)
    return sum
}

console.log('Task 5 "ForEach"',summForEach(arr5));
console.log('Task 5 "Reduce"',sumReduce(arr5));
console.log('Task 5 "Map"',sumMap(arr5));

// Task 6
// // Дан массив со строками [&#39;aaa&#39;, &#39;aaaqqq&#39;, &#39;zzzqq&#39;,
//  &#39;zz&#39;, &#39;qsaa&#39;, &#39;q&#39;, &#39;az&#39;]. Оставьте в нем только те
// // строки, длина которых больше 5-ти символов. Используйте filter().

let arr6 = ['aaa','aaaqqq','zzzqq','zz','qsaa','q','az']

function arrFilter(arr){
    let result = arr.filter(item => item.length > 5)
    return result
}

console.log('Task 6',arrFilter(arr6));


// Task 7
// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5,
// [6, 7]]. Оставьте в нем только подмассивы. Используйте filter().

let arr7 = [1,2,[3,4],5,[6,7]]

function getSubArray(arr){
    let result = arr.filter(item => Array.isArray(item))
    arr7 = result
    return arr7
}

console.log('Task 7',getSubArray(arr7));
