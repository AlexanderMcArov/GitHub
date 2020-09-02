// // attr присваивается ТЭГУ, ошибка в присовоении к классу

// console.log('Week7 Lesson 3');

// let title = $('h1')
// let welcome = $('.welcome')
// let title_h3 = $('.title')
// let titleById = $('#title')

// console.log(title);
// console.log(welcome);
// console.log(titleById);

// title_h3.css('color','red')
// title.css('color','green')
// titleById.css('color','green')
// welcome.css('color','blue')

// welcome.addClass('example1 example2')
// welcome.removeClass('example2')   
// console.log(welcome.hasClass('example2'));

// titleById.append(' Hello')
// titleById.prepend('PreHello ')

// $('h1').prependTo('h2')

// title.attr('id','super-title')

// $('.center').append('<h3 class="first-element"> Element </h3>')
// $('.center').after('<h3 class="second-element"> Second Element </h3>')

// let responce = confirm('Саня?')

// if(responce){
//     title.css('display','block')
// }

// // title.empty()
// // title.remove()

// // $('.center').html('<h1> Hello JS 7 </h1>')
// // console.log($('div').offset());

// // let cloneElem = $('body').clone()
// // console.log(cloneElem);
// // cloneElem[0].children[4].innerText = 'РАБОТАЕТ!!!!'
// // // $('.center').append(cloneElem)


function summ(){
    let a = +prompt('Введите первое число')
    let b = +prompt('Введите первое число')
    $('body').append(`<h1>${a} + ${b} = ${a + b}</h1>`)
}

function divv(){
    let a = +prompt('Введите первое число')
    let b = +prompt('Введите первое число')
    $('body').append(`<h1>${a} + ${b} = ${a - b}</h1>`)
}

function deff(){
    let a = +prompt('Введите первое число')
    let b = +prompt('Введите первое число')
    $('body').append(`<h1>${a} + ${b} = ${a / b}</h1>`)
}

function multy(){
    let a = +prompt('Введите первое число')
    let b = +prompt('Введите первое число')
    $('body').append(`<h1>${a} + ${b} = ${a * b}</h1>`)
}

let obj = {
    hello(){
        console.log('Работает');
    }
}
