// // console.log('Lesson2 - Recursiya');

// // // function counter(){
// // //     let count = 0;
// // //     count++;
// // //     return count;
// // // }

// // // console.log(counter());
// // // console.log(counter());
// // // console.log(counter());

// // // let count = 0;
// // // function counter(){
// // //     count++;
// // //     return count;
// // // }

// // // console.log(counter());
// // // console.log(counter());
// // // console.log(counter());

// // function counter(){
// //     let count = 0;    
// //     return function(){
// //         count++
// //         return count
// //     }
// // }

// // let a = counter();
// // console.log(a());
// // console.log(a());
// // console.log(a());
// // console.log(a());
// // console.log(a());
// // a = 0;

// // function afun(){
// //     let a = 0;
// //     return function(){
// //         a++
// //         return a
// //     };
// // }

// // let b = afun()
// // console.log(b());
// // console.log(b());
// // console.log(b()); 

// // //  Рекурсия 
// // console.time('First');
// // let x = 0;
// // function pool(){
// //     x++
// //     console.log(x);
// //     if(x == 50) return
// //     pool()
// // }

// // pool()
// // console.timeEnd('First');
// // console.time('Loop');

// // for(let i = 0; i < 50; i++){
// //     console.log(i);
// // }
// // console.timeEnd('Loop');

// function fact(a) {
//     if(a >= 1){
//         return a * fact(a-1)
//     }else{
//         return 1
//     }
// }

// console.log(fact(5));
// let count = 0;
// let arrnums = [1,2,3,4]
// function arrSum(a,summ) {    
//     console.log('Работает ?: ' + b());
//     summ += a.shift();
//     if(a.length != 0){
//         summ = arrSum(a,summ)
//     }
//     return summ    
// }
// console.log(arrSum(arrnums,0));
// console.log(Array.isArray(arrnums));

// let arr_result = []
// let arrnums = [1,2,3,4]
// function loopArray(array){
//     if(Array.isArray(array[0])){
//        // Perebor massiva 
//     }else{
//         arr_result.push(array.shift())
//         console.log(arr_result);
//     }
// }
// loopArray(arrnums)
// arrnums = [1,2,3,4]
// console.log(arr_result.push(arrnums[0]));
// console.log(arr_result);
