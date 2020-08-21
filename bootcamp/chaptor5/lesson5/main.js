// // console.log('Lesson5');

// // let arr = [2,[2,true,4],[[1,false],'Hello'],4]

// // arr = arr.join().split(',')
// // console.log(arr);
// // for(let i = 0; i < arr.length; i++){
// //     if(!isNaN(arr[i])) arr[i] = parseInt(arr[i])
// //     else if(arr[i] == 'true') arr[i] = true
// //     else if(arr[i] == 'false') arr[i] = false
// //     else arr[i] == undefined
// // }
// // console.log(arr);

// let arr = [[1],2,[2,true,4],[[1,false],'Hello'],4,[[[[[[[[[[[[[[[[[1,2,3]]]]]]]]]]]]]]]]]]
// let newArr = []

// console.time('Loop');
// function arrToLoop(arr,i = 0){
//     if(i == arr.length) return
//     if(Array.isArray(arr[i])) arrToLoop(arr[i])
//     else newArr.push(arr[i])
//     arrToLoop(arr, i + 1)
// }
// console.timeEnd('Loop');
// arrToLoop(arr)

// console.log(newArr);

// // Напишите функцию addN(n), которая вернёт другую функцию. 
// // Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции. 
// // Внимание, эта простая на реализацию замыкания

// function addN(a){
//     return function(b){
//         return a + b
//     }
// }

// console.log((a => b => a + b)(5)(100));

// console.log((a => alert(a))(prompt('Строка')));
