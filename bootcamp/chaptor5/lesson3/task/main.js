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

lift.printFloor()
lift.upOneFloor()
lift.upOneFloor()
lift.toFloor(8)
lift.toFloor(18)