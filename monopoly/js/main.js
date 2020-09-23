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
    // <<__LeftLine

    {name:'Kentuci Avenue',            price:  220,    color: items_color.x5},
    {name:'Chance',            price:  0,    color: items_color.x0},
    {name:'INDIANA Avenue',            price:  220,    color: items_color.x5},
    {name:'Illinois Avenue',            price:  120,    color: items_color.x5},
    {name:'B&O\nRailRoad',            price:  200,    color: items_color.x0},
    {name:'Atlantic Avenue',            price:  260,    color: items_color.x6},
    {name:'Ventnor Avenue',            price:  260,    color: items_color.x6},
    {name:'Water works',            price:  0,    color: items_color.x0},
    {name:'Marvin Avenue',            price:  260,    color: items_color.x6},
    // <<__Up_Line

    {name:'Pacific Avenue',            price:  300,    color: items_color.x5},
    {name:'NoRTH Avenue',            price:  220,    color: items_color.x5},
    {name:'Community\nChest <br><img src="https://market.games.mail.ru/s3/media/product/picture/2019/4/8eeddae08ba6760e5ecee82410840072.png">',   price:  0,      color: items_color.x0},
    {name:'Pensilvaniya Avenue',            price:  120,    color: items_color.x5},
    {name:'B&O\nRailRoad',            price:  200,    color: items_color.x0},    
    {name:'Chance',            price:  0,    color: items_color.x0},
    {name:'Park place',            price:  350,    color: items_color.x5},
    {name:'Luxury Taxi',            price:  75,    color: items_color.x0},
    {name:'BoardWalk',            price:  400,    color: items_color.x5},
    // <<__Right_Line

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
        
        item.innerHTML = ''
        let title = document.createElement('div')
        title.classList.add('item_header')
        let body = document.createElement('div')
        body.classList.add('item_body')
        let footer = document.createElement('div')
        footer.classList.add('item_footer','row')
        item.setAttribute('lvl',0)
        // title.innerText = index
        index >= gameTable.length ? index = 0 : ''
        title.style.background = gameTable[index].color
        body.innerHTML = gameTable[index].name        
        footer.innerHTML = `Price:<h6>${gameTable[index].price}</h6>`

        title.addEventListener('click',()=>{
            item.setAttribute('lvl',parseInt(item.getAttribute('lvl')) + 1)
            console.log(gameTable[index].name);
            console.log('Index: ',index);
            let img = document.createElement('img')
            if( parseInt(item.getAttribute('lvl')) <= 4) img.setAttribute('src','./img/dynnamitt_home.png')
            else if(parseInt(item.getAttribute('lvl')) >= 5){
                title.innerHTML = ''
                img.setAttribute('src','./img/hotel.png')
            }
            title.appendChild(img)
        })

        item.appendChild(title)
        item.appendChild(body)
        item.appendChild(footer)        
    })
}