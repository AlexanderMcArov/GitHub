let map = document.querySelector('.map')
let center = {
    longitude: 499,
    latitude: 299
}

let airobusList = []

function createAirobus(icao24,longitude,latitude){
    return {icao24,longitude,latitude}
}

function getAirbusList(){
    fetch('https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            data.states.forEach(item=>{
                airobusList.push(createAirobus(item[0],item[5],item[6]))
            })
        })
}

function renderAirbus(longitude,latitude){
    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.left = `${center.longitude-item.longitude}px`
    div.style.top = `${center.latitude-item.latitude}px`
    console.log(div.style.left,div.style.top);
    div.classList.add('item')
    map.appendChild(div)
}    

function loopair(){
    airobusList.forEach(item=>{
        renderAirbus(item.longitude,item.latitude)
    })
}

// let btn = document.createElement('button')
// btn.innerText = 'CREATE AIR'
// console.log(btn);
// document.querySelector('.btns').appendChild(btn)
// btn.addEventListener('click',()=>{
//     let a = createAirobus('POKA')
//     airobusList.push(a)
//     let div = document.createElement('div')
//     div.style.position = 'absolute'
//     div.style.left = `${center.longitude-a.longitude}px`
//     div.style.top = `${center.latitude-a.latitude}px`
//     console.log(div.style.left,div.style.top);
//     div.classList.add('item')
//     map.appendChild(div)
// })




