let colors = document.querySelector('.colors')

let list_downline = document.querySelector('.list_downline').querySelectorAll('.item')
let list_leftSide = document.querySelector('.list_leftSide').querySelectorAll('.item')
let list_upline = document.querySelector('.list_upline').querySelectorAll('.item')
let list_rightSide = document.querySelector('.list_rightSide').querySelectorAll('.item')
let items_list = getList()
let items_color = {
    x0: '#fff',
    x1: '#1b125a',
    x2: '#adccc5',
    x3: '#ac0f62',
    x4: '#e79311',
    x5: '#db312b',
    x6: '#edd900',
    x7: '#01bb4b'
}


let gameTable = [
    {name:'Argentina',          price:  60,     color: items_color.x1},
    {name:'Community\nChest',   price:  0,      color: items_color.x0},
    {name:'Poland',             price:  60,     color: items_color.x1},
    {name:'Income Taxi\n200$',  price:  0,    color: items_color.x0},
    {name:'Reading\nRailRoading\n200$',  price:  0,    color: items_color.x0},
    {name:'Central Avenue',            price:  100,    color: items_color.x2},
    {name:'CHANSE',            price:  0,    color: items_color.x0},
    {name:'Vermont',            price:  100,    color: items_color.x2},
    {name:'Connecticut Avenue',            price:  120,    color: items_color.x2},
    // <<__DownLine

    {name:'ST.Charles\nPlace',            price:  140,    color: items_color.x3},
    {name:'<img src="./img/electric_company.png">\nElectric\nCompany',            price:  150,    color: items_color.x0},
    {name:'States\nAvenue',            price:  140,    color: items_color.x3},
    {name:'Virginia\nAvenue',            price:  160,    color: items_color.x3},
    {name:'Pennsylvania\nRailRoad',            price:  200,    color: items_color.x0},
    {name:'St.James\nPlace',            price:  180,    color: items_color.x4},
    {name:'Community\nChest',   price:  0,      color: items_color.x0},
    {name:'Tennisee\nAvenue',            price:  180,    color: items_color.x4},
    {name:'New York\nAvenue',            price:  200,    color: items_color.x4},
    // <<__LeftRight

    {name:'Germany',            price:  120,    color: items_color.x4}
]
// <<__variables

function main(){
    for(let key in items_color){
        let divd = document.createElement('div')
        divd.classList.add('color_item')
        divd.style.background = `${items_color[key]}`
        divd.innerHTML = `${items_color[key]} Key:${key}`
        console.log(divd);
        colors.appendChild(divd)
        console.log(items_color[key]);
    }
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
        body.innerHTML = gameTable[index].name        
        footer.innerHTML = `Price:<h6>${gameTable[index].price}</h6>`

        item.appendChild(title)
        item.appendChild(body)
        item.appendChild(footer)
    })
}