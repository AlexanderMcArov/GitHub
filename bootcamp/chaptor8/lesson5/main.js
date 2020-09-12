console.log('Lesson 5');

class Animal{
    constructor(arg){
        this.name = arg.name
        this.age = arg.age
        this.hasTail = arg.hasTail
    }

    voice(){
        console.log(`I'm animal!`);
    }
}

class Person{
    constructor(name,surname,age,pet){
        this.name = name
        this.surname = surname
        this.age = age
        this.pet = pet
    }

    walking(){
        let wpet = this.pet.name
        console.log(`I'm walking with ${wpet}`);
    }
}

class Dog extends Animal{
    constructor(arg,species){
        super(arg)
        this.species = species
    }

    voice(){
        console.log(`I'm Gaga! *said ${this.name} ${this.species}*`);
    }
}

let bobik = new Animal({
    name: 'Bobik',
    age: 24,
    hasTail: true
})

let laika = new Dog({
    name: 'Laika',
    age: 24,
    hasTail: true
},'Labrador')

let Sanya = new Person('Alex','Week',24,bobik)

bobik.voice()
Sanya.walking()

laika.voice()

// Наследование икапусуляция поилфморфиязм