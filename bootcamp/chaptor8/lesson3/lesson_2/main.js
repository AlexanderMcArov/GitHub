// fetch("http://localhost:8000/todos")
//   .then(response=>response.json())
//   .then(data=>{
//     console.log(data)
//   })
//   .catch(error=>console.warn(error.message));
  
//? Создаем XMLHttpRequest;
// const xhr = new XMLHttpRequest();
  
// xhr.open('GET', 'http://localhost:8000/todos');

// xhr.send();

// xhr.onload = function(){
//   if(xhr.status < 200 || xhr.status > 299){
//     console.warn(`Error: ${xhr.status}\n${xhr.statusText}`);
//   }
//   console.log(JSON.parse(xhr.response));
// }

// xhr.onerror = function(){
//   console.log("Error")
// }

// function fetchXML(method, url, data){
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);

//   xhr.setRequestHeader('Content-Type', 'application/json');
  
//   xhr.send(data);

//   xhr.onload = function(){
//     if(xhr.status < 200 || xhr.status > 299){
//       console.warn(`Error: ${xhr.status}\n${xhr.statusText}`);
//     }
//     console.log(JSON.parse(xhr.response));
//   }
//   xhr.onerror = function(){
//     console.log("Error")
//   }
// }

// fetchXML('GET', "http://localhost:8000/todos");

// let data = JSON.stringify({
//   title: "qwerty",
//   // status: true,
//   // hello: "world"
// })

// //? GET - vozvrashaet dannye
// //? POST - Otpravlaet dannye
// //? PUT - Zamenaet dannye
// //? PATCH - Chastichno menaet
// //? DELETE - Udalaet

// fetchXML('DELETE', "http://localhost:8000/todos/2");
  // const arr = [
  //   {
  //     id: 1,
  //     title: "Hello",
  //     status: false
  //   },{
  //     id: 2,
  //     title: "world",
  //     status: false
  //   },{
  //     id: 3,
  //     title: "qwerty",
  //     status: false
  //   }
  // ]

const list = document.querySelector("#list");
const modal = document.querySelector('.modal-wrapper')
console.log(modal);
const edit_form = document.querySelector('#edit-form')
const edit_inp = document.querySelector('#edit-inp')
modal.addEventListener('click',(e)=>{
  console.log(e.target);
  console.log(e.currentTarget);
  if(e.target == e.currentTarget) modal.classList.add('d-none')
}
)
edit_form.addEventListener('submit',(e)=>{
  e.preventDefault()
  edit_item(modal.getAttribute('data-id'),edit_inp.value)
})

function removeItem(id){
  fetch("http://localhost:8000/todos/" + id, {
    method: "delete"
  })
    .then(r=>{
      getTodos();
    })
}

function edit_item(id,title){
  fetch("http://localhost:8000/todos/" + id, {
    method: "PATCH",
    body: JSON.stringify({
      title
    }),
    headers: {'Content-type':'application/json'}
  })
    .then(res=>{
      modal.classList.add('d-none')
      getTodos('edit-item')
    })
}

function addItemToList(id, title, status){
  const elem = document.createElement("li");
  elem.classList.add("list-item");
  elem.classList.add("list-item-" + id);
  
  elem.innerText = title;

  elem.setAttribute("data-id", id);
  elem.setAttribute("data-status", status);
  if(status){
    elem.classList.add("completed")
  }

  const btn = document.createElement("button");
  btn.classList.add("btn-delete");
  btn.innerText = "X";
  btn.addEventListener("click",(e)=>{
    removeItem(id);
  })

  const edit_btn = document.createElement('button')
  edit_btn.classList.add('btn-edit')
  edit_btn.innerText = 'Edit'
  elem.prepend(edit_btn)
  edit_btn.addEventListener('click',function(){
    edit_inp.value = title
    modal.classList.remove('d-none')
    modal.setAttribute('data-id',id)
  })
  elem.prepend(btn)
  list.appendChild(elem)
  
}

function renderTodo(arr){
  list.innerHTML = "";

  arr.forEach((item)=>{
    addItemToList(item.id, item.title, item.status)
  })
}


function getTodos(){
  fetch("http://localhost:8000/todos")
    .then(resp=>resp.json())
    .then(data=>{
      renderTodo(data)
    })
    .catch(err=>console.log(err))
}

getTodos()

window.addEventListener("click", (e)=>{
  // console.log(e.target.tagName)
  if(e.target.tagName == "LI"){
    const id = e.target.getAttribute("data-id");
    const status = JSON.parse(e.target.getAttribute("data-status"));
    
    fetch("http://localhost:8000/todos/" + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: !status
      })
    })
      .then(()=>getTodos())
      .catch((err)=>console.log(err))
  }
})


const $inp = $("#title");
const $form = $("#myForm");

$form.on("submit", (e)=>{
  e.preventDefault();
  const title = $inp.val();
  $inp.val("")
  $.ajax({
    url: "http://localhost:8000/todos",
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      title,
      status: false
    }),
    success: function(){
      getTodos()
    }
  })
})