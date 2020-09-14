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
// 105: "���-�'�����"
// 106: "����"
// 107: "������"
// 108: "�������"
// 109: "����"
// 110: "������"
// 111: "������"
// 112: "�������"
// 113: "�����"
// 114: "�����"
// 115: "�����"
// 116: "�����������"
// 117: "����������"
// 118: "��������"
// 119: "����������"
// 120: "����������"
// 121: "�������"
// 122: "�����"
// 123: "���������"
// 124: "������"
// 125: "��������"
// 126: "����"
// 127: "��������"
// 128: "������"
// 129: "�������"
// 130: "���������"
// 131: "���������� �������"
// 132: "�������"
// 133: "����������"
// 134: "��������"
// 135: "��������"
// 136: "������"
// 137: "��������"
// 138: "����������"
// 139: "������"
// 140: "�������"
// 141: "�����"
// 143: "�����"
// 144: "�������"
// 146: "���������"
// 147: "����"

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