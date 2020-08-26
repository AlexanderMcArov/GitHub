console.log('Week 6 Lesson 3')


// Task 1
// у вас есть масив:
// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// Вам надо поместить в переменную firstName 1-элемент
// в переменную titul  3-элемент 
let arr1 = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
let [firstName,,titul] = arr1
console.log('Task 1',firstName,titul);

// // Task 2
// // У вас есть строка `Faisal Iraqi`
// // поместите в переменную firstName первое слово
// // в переменную lastName второе слово
let string2 = `Faisal Iraqi`
let arr2 = string2.split(' ')
let [firstName2,lasName2] = arr2
console.log('Task 2',firstName2,lasName2);

// Task 3
// создайте объект 
// let obj = {};
// в свойство firstName первое слово
// в свойство lastName второе слово

let [,lastName] = arr1
let obj = {
    firstName: firstName,
    lastName: lastName
}
console.log('Task 3',obj.firstName,obj.lastName);

// Task 4
// Создайте переменную let a = 0  и let b = 1
// поменяйте их значения местами используя деструктуризацию массива 

let a = 0
let b = 1
let arr = [a,b]
let [c,d] = arr
a = d
b = c
console.log('Task 4',a,b);



