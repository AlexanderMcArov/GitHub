//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// Выберите при помощи селекторов Native JS
//1) все HTML-элементы strong и окрасьте их в зеленый цвет
//2) найдите все HTML-элементы em и добавьте им класс .selected
//3) Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected
//4) Найдите все гиперссылки и удалите у них подчеркивания
//5) Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.
//6) среди набора элементов с классом .row удалите класс у второго элемента
//7) прочитайте CSS-свойство color у второй гиперсылки в тексте

// 1)
let list_strong = document.getElementsByTagName('strong');
for(let i = 0; i < list_strong.length; i++){
    list_strong[i].style.color = "#00ff00";
}

// 2)
let list_em = document.getElementsByTagName('em');
for(let i = 0; i < list_em.length; i++){
    list_em[i].classList.add('selected')
}

// 3)
let list_mark = document.querySelectorAll('.row mark').forEach(item =>{
    item.classList.add('selected')
})

// 4)
let list_a = document.getElementsByTagName('a')
for(let i = 0; i < list_a.length; i++){
    list_a[i].style.textDecoration = 'none'
}

// 5)
for(let i = 0; i < list_strong.length; i++){
    list_strong[i].classList.toggle('some')
}
// console.log(list_strong);

// 6)
let list_row = document.getElementsByClassName('row')
list_row[1].classList.remove('row')
// console.log(list_row);

// 7)
// console.log(list_a);
// list_a[1].style.color = '#ff0000'
console.log(list_a[1].style.color);

console.log(list_strong[0].style.color);
function togglefon() {
    for (let i = 0; i < list_strong.length; i++) {
        let a = list_strong[i].style
        if(a.color == 'rgb(0, 255, 0)'){
            a.color = '#ff00ff'
        }else if(a.color == 'rgb(255, 0, 255)'){
            a.color = '#00ff00'
        }       
    }
}
setInterval(togglefon,1000)
togglefon()