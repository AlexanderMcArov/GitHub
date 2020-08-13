// Task #1
/*
  перебрать массив matrix1 
  таким образом,
  что бы в консоли вышли элементы
  в алфавитном порядке
  с помощъю 2 циклов for
*/
console.log('// Task 1');
let matrix1=[
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
  ]

for(let i = 0; i < matrix1.length; i++){
    for(let j = 0; j < matrix1[i].length; j++){
        console.log(matrix1[i][j]);
    }
}
  
  // Task #2
  /*
    на основе данного двумерного
    массива создайте новый одномерный
    к прим: ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
  */
  console.log('// Task 2');
  let matrix2=[
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
  ]

let array = []

for(let i = 0; i < matrix1.length; i++){
    for(let j = 0; j < matrix1[i].length; j++){
        array.push(matrix1[i][j])   
    }
}
 console.log(array);
  
  // Task #3
  /*
    на основе массива arr 
    создайте новый в котором 
    только гласные буквы
  */
console.log('// Task 3');

let arr=["a","b","c","d","e","f","g","h","i"];
let glasnie_Bukvi = ["a", "e", "i", "o", "u", "y"]
let result = []

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < glasnie_Bukvi.length; j++){
        if(arr[i] === glasnie_Bukvi[j]){
            result.push(arr[i])
        }
    }
}

console.log(result);
  // Task #4
  /*
    на основе массива arr 
    создайте новый в котором 
    элементы стоят в обратном порядке
  */
 console.log('// Task 4');
  let arr2 = ["a","b","c","d","e","f","g","h","i"];
  console.log(arr2);
  let arr3 = arr2.reverse()
  console.log(arr3);
  
  // Task #5 **extra
  /*
    перебрать массив matrix1 
    таким образом,
    что бы в консоли вышли элементы
    "a", "e", "i"
    затем:
    "c","e","g"
  */
 console.log('// Task 5');
  let matrix3=[
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
  ]
  let str = []
  let str2 = []
  for(let i = 0; i < matrix3.length;i++){
    str.push(matrix3[i][i])
    str2.push(matrix3[i][matrix3.length-i-1])
  }
  console.log(str);
  console.log(str2);