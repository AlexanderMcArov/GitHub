// Напишите функцию которая принимает число и возвращает его факториал используя рекурсию. 
// 	Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:


// 	5! = 1*2*3*4*5 = 5*4*3*2*1
// 	6! = 1*2*3*4*5*6 = 6*5*4*3*2*1

function factorial(number){
    return number > 0 ? number * factorial(number-1) : 1
}

alert(factorial(prompt('Введите чилос, чтобы найти его факториал: ')))

// Напишите функцию которая возвращает n число по порядку чисел Фибоначчи (Рекурсия)

function fibonachi(n = 3){
    if(n <= 2) return 1;
    else return fibonachi(n-1) + fibonachi(n-2)
}

alert(fibonachi(prompt('Цисло Фибоначи: ')))

// Напишите функцию которая перебирает массив через рекурсию

function bruteForceArray(arr){
    let sum = arr.shift();
    console.log(sum);
    if(arr.length > 0) return bruteForceArray(arr)
    else return sum
}
let brutearray = [1,2,3,4,5,6,7]
bruteForceArray(brutearray)
// Напишите функцию которая возвращает массив из 4 функций; 
// первая увеличивает счетчик( переменная i )  на 1
// вторая уменьшает на 1
// третья умножает на 2
// четвёртая делит на 2

console.log('Массив из 4х функций');
function fourDragon(){
    let count = 0;

    return [function(){
        console.log('Увеличили на 1');
        count++;
        return count      
    },function(){
        console.log('Уменьшили на 1');
        count--;
        return count
    },function(){
        console.log('Умножили на 2');
        count * 2
        return count
    },function(){
        console.log('Поделили на 2');
        count / 2
        return count
    }]
}

let counter = fourDragon()

console.log(counter[0]());
console.log(counter[1]());



// Напишите функцию которая принимает число и возвращает его двоичный формат 
// (Решать при помощи рекурсии)
// К прим:

// func(5)///101
// func(6)///110
// func(1234321)///


console.log('Task toBinaryCode');

function toBinnaryCode(n,result = []){    
    result.unshift(parseInt(n % 2)) 
    return n <= 2 ? result.join('') : toBinnaryCode(n / 2,result)
}

alert(toBinnaryCode(parseInt(prompt('Введите число, для переведения его в двоичный код:'))));





