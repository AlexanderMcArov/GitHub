class User{
    constructor(email,password){
        this.#email = email
        this.#password = password
    }
    
    #password
    #email

    get password(){
        return `PASSWROD IS: ${this.#password}`
    }

    set password(newPass){
        this.#password = newPass.toLocaleLowerCase()
        console.log('Pomenyali Parol')
    }
}

let user = new User('email@gmail.com','parol')
console.log(user.password);
user.password = 'QWERTY'

let daysName = {
    rus: [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг"
    ]
}
let date = new Date()
console.log(daysName.rus[date.getDay()-1])
