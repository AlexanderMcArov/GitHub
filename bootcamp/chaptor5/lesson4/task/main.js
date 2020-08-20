// Создайте функцию которая принимает строку (email адресс) и возвращает булево.
// Функция должна проверить правильно ли написан email.
// (Такие функции называются валидаторами)


function validEmail(email){
    let patternValid = new RegExp(/.+@.+\..+/,'gi')  
    return patternValid.test(email)
}

alert(validEmail(prompt('Введите e-mail в формате: \nemail@gmail.com')))

// Теперь создайте валидатор для тел номера, дополнительно вытащите код страны
// Пример для телефона: +996700405060

function validPhone(phone){
    let res = []
    let regexCode = /\+\d{3}/gi
    let regexNumber = /[0-9]{9}$/gi 
    if(phone.match(regexCode) != null){
        console.log(phone.match(regexCode));
        res.push((phone.match(regexCode)).join())
    }
    if(phone.match(regexNumber) != null){
        console.log(phone.match(regexNumber));
        res.push((phone.match(regexNumber)).join())
        console.log(res);
    }   
    return res.length != 0 ? `Код страны: ${res[0]}\nНомер телефона: ${res[1]}` : 'Неверный формат : +996705666302'
}

alert(validPhone(prompt('Введите номер телефона в формате: \n+996705666302')))

// К вам приходит строка:
// “Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона
// +996700405060”,
// вы должны вытащить все числа из строки и вернуть как массив с числами.

function inputText(validtext){
    let text = 'Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона +996700405060'
    let patternNum = /\+\d+|\d+/gi
    let result = validtext.match(patternNum)
    return `${text}\n***Результат валидации***\nВозраст: ${result[0]}\nДата рождения: ${result[1]}\nНомер телефона: ${result[2]}`
}

alert(inputText('Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона +996700405060'))

// К вам приходит строка:
// “Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона
// +996700405060”,
// Вытащите из строки все заглавные буквы.

function getUpCase(validtext){
    let text = 'Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона +996700405060\nНайти все заглавные буквы.'
    let patternUpCase = /[A-ZА-Я]/g
    let result = validtext.match(patternUpCase)
    return `${text}\n***Результат валидации***\n${result}`
}

alert(getUpCase('Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона +996700405060'))