// Напишите функцию которая принимает число и возвращает его факториал используя рекурсию. 
// 	Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
	
// 	5! = 1*2*3*4*5 = 5*4*3*2*1
// 	6! = 1*2*3*4*5*6 = 6*5*4*3*2*1

function factorial(number){
    return number > 0 ? number * factorial(number-1) : 1
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// Напишите функцию которая возвращает n число по порядку чисел Фибоначчи (Рекурсия)

function fibonachi(n = 3){
    if(n <= 2) return 1;
    else return fibonachi(n-1) + fibonachi(n-2)
}

console.log('Fibonachi - ' + fibonachi(15));

// Напишите функцию которая перебирает массив через рекурсию

function bruteForceArray(arr){
    sum = arr.shift();
    console.log(sum);
    if(arr.length > 0) return bruteForceArray(arr)
    return sum
}
let brutearray = [1,2,3,4,5,6,7]
bruteForceArray(brutearray)
// Напишите функцию которая возвращает массив из 4 функций; 
// первая увеличивает счетчик( переменная i )  на 1
// вторая уменьшает на 1
// третья умножает на 2
// четвёртая делит на 2

console.log('Массив из 4х функций');
function fourDragon(a){
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
// func(1234321)///100101101010110010001

function toBinnaryCode(n){
    let res = ''
    res += n % 2
    if(n / 2 == 1 && n % 2 == 0) return res
    else return toBinnaryCode(n / 2)
}

console.log(toBinnaryCode(5));

