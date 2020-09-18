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
let intro_line = $('.intro__liner')
// <<__Variables



// >> MAIN
downloadGoodsFromServer()
// << MAIN

// >> functions
function addNewGood(title,price,count,seller,number,images) {
    
   fetch('http://localhost:8000/goods',{
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
    fetch('http://localhost:8000/goods/'+id,{
       method: 'DELETE',
       headers: {'Content-Type':'application/json'}
   })
    .then(res => downloadGoodsFromServer())
}

function editGood(id){
    let inputs = $('.modal_box').children('*')
    let data = []

    $.each(inputs,item=>{
        console.log(inputs[item].value);
        data.push(inputs[item].value)
    })

    fetch('http://localhost:8000/goods/'+id,{
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            price: data[0],
            count: data[1],
            seller: data[2],
            number: data[3],
            images: data[4]
        })
    })
    .then(res=>downloadGoodsFromServer())

    console.log(inputs);
}

function admin(){
    isAdmin = !isAdmin
    downloadGoodsFromServer()
}

function downloadGoodsFromServer() {
    div.html('')
    if(isAdmin){
        let btn = $('<button>')
        btn.text('Add Book')        
        btn.addClass('btn')
        btn.addClass('add')
        btn.click(()=>{
            div.html(`<div class="modalw">
                <div class="modal_box">
                    price<input type="text"><br>
                    count<input type="text"><br>
                    seller<input type="text"><br>
                    number<input type="text"><br>
                    images<input type="text"><br>
                    <button class="btn adds">ADD</button>
                </div>
            </div>`)
            let btn_add = $('button.adds') 
            console.log(btn_add);           
            btn_add.click(()=>{
                let inputs = $('.modal_box').children('*')
                addNewGood('TITLE',inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value)
                div.html('')
                downloadGoodsFromServer()
            })   
            intro_line.append(div)   
        })
        intro_line.append(btn)        
        
    }
    product_list.text("")
    fetch('http://localhost:8000/goods')
        .then(res=>res.json())
        .then(data=>{
            addGoodList(data)
            console.log(data);
        })
}

function addGoodList(data){    
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
        let btn_edit = $('<button>')
        btn_edit.click(()=>{
            editGood(a.id)
        })
        btn_edit.addClass('btn')
        btn_edit.addClass('edit')
        btn_edit.text('Edit')
        product.append(btn_edit)

        let btn_delete = $('<button>')
        btn_delete.click(()=>{
            removeGood(a.id)
            downloadGoodsFromServer()
        })
        btn_delete.addClass('btn')
        btn_delete.addClass('delete')
        btn_delete.text('Delete')
        product.append(btn_delete)
    }         
    return product
}



// << functions


// >> EVENTS

// << EVENTS