
console.log('Lesson 3');

// Task 1

// Функция принимает параметр min. Параметр должен являться числом. В нем лежит
// число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в
// первую, вторую, третью или четвертую).

function fourth(min){
    if(min > 0 && min <= 15) return alert('Первая четверть.')
    else if(min > 15 && min <= 30) return alert('Вторая четверть')
    else if(min > 30 && min <= 45) return alert('Третья четверть')
    else if(min > 45 && min <= 59) return alert('Четвертая четверть')
    else alert('Неверный формат.')
    
}
fourth(parseInt(prompt('Введите число от 0 до 59:')));

// Task 2
// Функция принимает количество часов (проверить что это число). Функция возвращает
// количество секунд в переданых часах.

function secondsInHours(hours){
    hours = parseInt(hours)
    return `В ${hours} часах, находится ${hours*60*60} секунд.`
}

alert(secondsInHours(+prompt('Введите количество часов')))

// task 3

// В функцию передаются переменные first и second. Проверьте, что first делится без
// остатка на second. Если это так - возвращаете true, иначе возвращаете false.

function remainder(first, second){
    first = parseInt(first)
    second = parseInt(second)
    if(first % second == 0) return true
    else return false
}

alert(remainder(prompt('Делится ли первое число без остатка на второе?\nВведите первое число:'),prompt('Введите второе число:')))
// Task 4

// Необходимо создать объект, который будет представлять из себя лифт. У него
// должны быть методы:
// ● toFloor - принимает целое числовое значение от 1 до 16 - переместиться на
// определенный этаж.
// ● printFloor - печатает текущий этаж, на котором находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// Изначально лифт находится на первом этаже. Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить постепенное перемещение лифта на нужный этаж

let lift = {
    nFloor: 1,
    toFloor(floor){
        this.printFloor()
        if(floor > 16 || floor < 1){
            console.log('Значения этажей должны быть в диапазоне от 1 до 16');
        }else 
        if(this.nFloor == floor){
            console.log('Вы уже, на этом этаже.');
            toFloor(floor)
        }else{
            while(this.nFloor != floor){
                if(this.nFloor > floor) lift.downOneFloor()
                else lift.upOneFloor()
            }           
        }
    },
    printFloor(){
        return console.log(`Вы сейчас на ${lift.nFloor} этаже.`);
    },
    upOneFloor(){
        if(this.nFloor == 16) console.log('Нельзя подняться выше 16 этажа подняться.');
        else{
            this.nFloor += 1
            this.printFloor()
        } 
    },
    downOneFloor(){
        if(this.nFloor == 1) console.log('Нельзя спуститься ниже 1 этажа.');
        else{
            this.nFloor -= 1
            this.printFloor()           
        } 
    }
}

// lift.printFloor()
// lift.upOneFloor()
// lift.upOneFloor()
// lift.toFloor(8)
// lift.toFloor(18)
// lift.toFloor(10)
// lift.toFloor(5)
// lift.toFloor(1)
// lift.toFloor(-11)
// lift.toFloor(9)
// lift.toFloor(15)
// lift.upOneFloor()
// lift.upOneFloor()
// lift.upOneFloor()
// lift.upOneFloor()
// lift.toFloor(1)
// lift.downOneFloor()
// lift.downOneFloor()
// lift.downOneFloor()
lift.toFloor(5)
