// // // console.log('Functions Constructor');

// // // function Car(name){
// // //     this.name = name
// // //     this.printName = function(){
// // //         return `This is ${name}`
// // //     }
// // // }
// // // function Car2(name){
// // //     this.name = name
// // //     this.printName = function(){
// // //         return `This is ${name}`
// // //     }
// // // }

// // // Car.prototype.Hello = function(){
// // //     console.log(`Hello ${this.name}`);
// // // }
// // // Car.prototype.isHuman = true

// // // Car.prototype.toString = function(){
// // //     return 'Car: '
// // // }

// // // let audi8 = new Car('AUDI A8')
// // // let bmw = new Car2('BMW')

// // // console.log(audi8.printName());
// // // console.log(bmw.printName());
// // // console.log(audi8);
// // // audi8.Hello()
// // // // bmw.Hello()

// // // let ovner = {
// // //     lasname(){
// // //         return `Owner-name: ${this.name}`
// // //     }
// // // }

// // // let a = ovner.lasname.call(audi8)
// // // console.log(a);


// // // let b = ovner.lasname.apply(audi8,[true])

// // // console.log(b);

// // function Student(name,lname,age,subject){
// //     Person.call(this,name,lname,age)
// //     Person2.call(this,name,lname,age)
// //     this.subject = subject
// // }
// // // Student.prototype = Person.prototype
// // // Student.prototype.object2 = Person.prototype

// // function Person(name,lname,age) {
// //     this.name = name
// //     this.lname = lname
// //     this.age = age
// // }
// // function Person2(name,lname,age) {
// //     this.name = name
// //     this.lname = lname
// //     this.age = age
// //     sayHello = function(){
// //         console.log('HELLO')
// //     }
// // }
// // Person.prototype = Object.create(Person2.prototype)
// // Person.prototype.constructor = Person;
// // Person.prototype.name = function(){
    
// // }
// // Student.prototype = Object.create(Person.prototype)
// // Student.prototype.constructor = Student;


// // Person.prototype.greetings = function(){
// //     console.log('GREETINGS FUNCTION : ',this.name,this.lname);
// // }

// // Person2.prototype.greetings2 = function(){
// //     console.log('ST2 FUNCTION : ',this.name);
// // }


// // let person = new Person('John','Week','44')
// // let student = new Student('Sanya','Week','24','IT')
// // person.greetings2()
// // student.greetings()
// // student.greetings()
// // // student.getSub()


// class Animal{
//     constructor(name,voice){
//         this.name = name
//         this.voice = voice
//     }
//     say(a){
//         console.log(`SAY : ${this.name} - ${this.voice} + ${a}`);
//     }
// }

// class Dog extends Animal{
//     constructor(nickname){
//         super('Dog','gaf')
//         this.nickname = nickname
//     }
//     play(){
//         super.say(this.nickname)
//     }
//     say(){
//         console.log(this.nickname);
//     }
// }

// let monkey = new Animal('Monkey','au')
// let boo = new Animal('Boo','foobar')
// monkey.say()
// boo.say()
// let gav = new Dog('Laikaa')
// gav.say()

class User{
    #password = '222'
    #password1 = '333'
    #password2 = '444'
    getPass(){
        return this.#password
    }
    setPass(a){
        this.#password = a
        return this.#password
    }
}

const user = new User
console.log(user.setPass(3232323232));
console.log(user.getPass());