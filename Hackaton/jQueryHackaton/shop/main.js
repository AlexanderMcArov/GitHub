// Проект «Магазин с товарами» ТЗ:
// 1. Создание товара (описание,цена за единицу, количество в складе, продавец, номер телефона,
// картинки)
// 2. Удаление товара
// 3. Редактирование товара
// 4. Список товаров на главном экране
// 5. Создать модальное окно для добавления товара

let product_list = $('.product_list')
let cart = []
let isAdmin = false
let div = $('<div>')
let edit_box = $('.edit_box')
let add_box = $('.add_box')
let intro_line = $('.intro__liner')
let add_item = $('#add_item')
let state = []
// <<__Variables


// >> MAIN
downloadGoodsFromServer()
console.log('Пропиши в консоле admin() для включения выключения админки');
// << MAIN

// >> functions
function addNewGood(title,price,count,seller,number,images) {
    add_box.text('')
    fetch('http://localhost:3333/goods',{
       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
           title,
           price,
           count,
           seller,
           number,
           images
       })
   })
}

function removeGood(id){
    fetch('http://localhost:3333/goods/'+id,{
       method: 'DELETE',
       headers: {'Content-Type':'application/json'}
   })
    .then(res => downloadGoodsFromServer())
}

function editGood(data){

    fetch('http://localhost:3333/goods/'+data.id,{
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            title: data.title,
            price: data.price,
            count: data.count,
            seller: data.seller,
            number: data.number,
            images: data.images
        })
    })
    .then(res=>downloadGoodsFromServer())

    console.log(inputs);
}

function downloadGoodsFromServer() {
    div.html('')    
    fetch('http://localhost:3333/goods')
        .then(res=>res.json())
        .then(data=>{
            addGoodList(data)
            state = data
        })
}

function addGoodList(data){ 
    edit_box.text('') 
    product_list.text("")  
    $.each(data,item=>{
        let a = data[item]
        let res = renderGoodInCatalog(a)
        product_list.append(res)
    })
}

function renderGoodInCatalog(a){
    /*
        product
        product-img
        product-title
        product-desc
        product-price
        button1
    */    
    console.log(a);
    let product = $('<div>')
    product.addClass('product')

    let product_img = $('<div>')  
    product_img.addClass('product-img')
    let img = $('<img>')
    img.attr("src",`${a.images}`)
    product_img.append(img)    

    let product_title = $('<div>')
    product_title.addClass('product-title')
    product_title.text(a.title)

    let product_desc = $('<div>')
    product_desc.addClass('product-desc')
    product_desc.text(a.seller)

    let product_phone = $('<div>')
    product_phone.addClass('product-desc')
    product_phone.text(a.number)

    let product_price = $('<div>')
    product_price.addClass('product-price')   
    product_price.text('Price: €'+a.price) 

    product.append(product_img)
    product.append(product_title)
    product.append(product_desc)
    product.append(product_phone)
    product.append(product_price)

    if(isAdmin){
        console.log('Adminka');
        let btn_edit = $('<button>').text('Edit')
        let btn_delete = $('<button>').text('Delete')
        btn_delete.addClass('btn delete')
        btn_edit.addClass('btn edit')

        product.append(btn_delete)
        product.append(btn_edit)

        btn_delete.click(()=>{
            removeGood(a.id)
            console.log('Remove Item with ID: ',a.id);
        })
        btn_edit.click(()=>{            
            let add_window = $('.add_window')
            edit_box.text('')
            add_window.removeClass('hidden')
            let inp = {
                title: $('<input>').val(a.title),
                price: $('<input>').val(a.price),
                count: $('<input>').val(a.count),
                seller: $('<input>').val(a.seller),
                number: $('<input>').val(a.number),
                images: $('<input>').val(a.images)
            }
            let btn_ok = $('<button>').text('OK')
            let btn_cancel = $('<button>').text('cancel')
            btn_ok.addClass('btn add')
            btn_ok.click(()=>{
                editGood({
                title: inp.title.val(),
                price: inp.price.val(),
                count: inp.count.val(),
                seller: inp.seller.val(),
                number: inp.number.val(),
                images: inp.images.val()
            })
                add_window.addClass('hidden')
            })
            btn_cancel.addClass('btn delete')
            btn_cancel.click(()=>{
                add_window.addClass('hidden')
            })            
            $.each(inp,item=>{
                edit_box.append(inp[item])
            })
            edit_box.append(btn_ok)
            edit_box.append(btn_cancel) 

            console.log(edit_box);
            console.log('Edit Item with ID: ',a.id);
        })
    }

    return product
}


function admin(){
    isAdmin = !isAdmin
    addGoodList(state)
    console.log('ADMINCLICK');
}
// << functions


// >> EVENTS

add_item.click(()=>{

    let add_window = $('.add_window')
            add_box.text('')
            add_window.removeClass('hidden')
            let inp = {
                title: $('<input>'),
                price: $('<input>'),
                count: $('<input>'),
                seller: $('<input>'),
                number: $('<input>'),
                images: $('<input>')
            }
            let btn_ok = $('<button>').text('OK')
            let btn_cancel = $('<button>').text('cancel')
            btn_ok.addClass('btn add')
            btn_ok.click(()=>{
                addNewGood(
                    inp.title.val(),
                    inp.price.val(),
                    inp.count.val(),
                    inp.seller.val(),
                    inp.number.val(),
                    inp.images.val()                    
                )
                add_window.addClass('hidden')
            })
            btn_cancel.addClass('btn delete')
            btn_cancel.click(()=>{
                add_window.addClass('hidden')
            })            
            $.each(inp,item=>{
                add_box.append(item)
                add_box.append(inp[item])
                add_box.append('<br>')
            })
            add_box.append(btn_ok)
            add_box.append(btn_cancel) 

            console.log(add_box);
})

// << EVENTS