let list_downline = document.querySelector('.list_downline').querySelectorAll('.item')
let list_leftSide = document.querySelector('.list_leftSide').querySelectorAll('.item')
let list_upline = document.querySelector('.list_upline').querySelectorAll('.item')
let list_rightSide = document.querySelector('.list_rightSide').querySelectorAll('.item')
let items_list = getList()
let items_color = {
    x1: '#1b125a',
    x2: '#adccc5',
    x3: '#ac0f62',
    x4: '#e79311',
    x5: '#db312b',
    x6: '#edd900',
    x7: '#01bb4b',
    x8: '#01bb4b'
}
// 105: "Кот-д'Ивуар"
// 106: "Куба"
// 107: "Кувейт"
// 108: "Кюрасао"
// 109: "Лаос"
// 110: "Латвия"
// 111: "Лесото"
// 112: "Либерия"
// 113: "Ливан"
// 114: "Ливия"
// 115: "Литва"
// 116: "Лихтенштейн"
// 117: "Люксембург"
// 118: "Маврикий"
// 119: "Мавритания"
// 120: "Мадагаскар"
// 121: "Майотта"
// 122: "Макао"
// 123: "Македония"
// 124: "Малави"
// 125: "Малайзия"
// 126: "Мали"
// 127: "Мальдивы"
// 128: "Мальта"
// 129: "Марокко"
// 130: "Мартиника"
// 131: "Маршалловы Острова"
// 132: "Мексика"
// 133: "Микронезия"
// 134: "Мозамбик"
// 135: "Молдавия"
// 136: "Монако"
// 137: "Монголия"
// 138: "Монтсеррат"
// 139: "Мьянма"
// 140: "Намибия"
// 141: "Науру"
// 143: "Нигер"
// 144: "Нигерия"
// 146: "Никарагуа"
// 147: "Ниуэ"

let gameTable = [
    {name:'Argentina',  price:  60,     color: items_color.x1},
    {name:'Poland',     price:  60,     color: items_color.x1},
    {name:'Bolagria',   price:  100,    color: items_color.x2},
    {name:'Finland',    price:  100,    color: items_color.x3},
    {name:'Germany',    price:  120,    color: items_color.x4}
]
// <<__variables

function main(){
    upDateItemsList()
}

main()

// FUNCTIONS__>> 
function getList(){
    let res = []
    list_rightSide.forEach(item=>{
        res.unshift(item)
    })
    let a = []
    list_upline.forEach(item=>{
        a.unshift(item)
        a.pop
    })
    a.forEach(item=>{
        res.unshift(item)
    })
    list_leftSide.forEach(item=>{
        res.unshift(item)
    })
    list_downline.forEach(item=>{
        res.unshift(item)
    })
    return res
}

function upDateItemsList(){
    items_list.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            console.log(gameTable[index].name);
        })
        item.innerHTML = ''
        let title = document.createElement('div')
        title.classList.add('item_header')
        let body = document.createElement('div')
        body.classList.add('item_body')
        let footer = document.createElement('div')
        footer.classList.add('item_footer','row')
        
        title.innerText = index
        index >= gameTable.length ? index = 0 : ''
        title.style.background = gameTable[index].color
        body.innerText = gameTable[index].name        
        footer.innerHTML = `Price:<h6>${gameTable[index].price}</h6>`

        item.appendChild(title)
        item.appendChild(body)
        item.appendChild(footer)
    })
}