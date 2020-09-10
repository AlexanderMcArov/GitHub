console.log('Tamagocha');

let buttons = document.querySelectorAll('button')
let gameTitle = document.querySelector('.main_title')
let info = document.querySelectorAll('.foo_info')
let moves = document.querySelector('.moves')

class Tamagocha{
    constructor(name,hungry,happines){
        this.name = name
        this.hungry = hungry
        this.happines = happines
    }
    say(){
        this.hungry--
        this.happines--
        info[1].innerHTML = "Hungry: " + this.hungry
        info[2].innerHTML = "Happy: " + this.happines
        moves.innerHTML = '<img src="./img/say.png">'
        setTimeout(()=>{
            moves.innerHTML = ''
        },3000)
        return `Hello. I'm ${this.name}!`
    }
    play(){
        if(this.hungry < 40) return `${this.name} doesn't want to play.`
        this.hungry--
        this.happines++
        info[1].innerHTML = "Hungry: " + this.hungry
        info[2].innerHTML = "Happy: " + this.happines
        moves.innerHTML = '<img src="./img/play.png">'
        setTimeout(()=>{
            moves.innerHTML = ''
        },3000)
        return `${this.name} Playing: Hungry => ${this.hungry}, Happy => ${this.happines}`
    }
    eat(){
        if(this.eat == 100) return `${this.name} doesn't want to eat.`
        this.hungry = this.hungry + 2
        this.happines--
        info[1].innerHTML = "Hungry: " + this.hungry
        info[2].innerHTML = "Happy: " + this.happines
        moves.innerHTML = '<img src="./img/eat.gif">'
        setTimeout(()=>{
            moves.innerHTML = ''
        },3000)
        return `${this.name} Playing: Hungry => ${this.hungry}, Happy => ${this.happines}`
    }
}

function main(){
    let Catty = new Tamagocha('Catty',60,80)
    info[0].innerHTML = "Name: " + Catty.name
    buttons.forEach(item => {
        item.addEventListener('click',function(){
            console.log(item.getAttribute('id'));
            if(item.getAttribute('id') == 'play'){
                gameTitle.innerHTML += "<br>" + Catty.play()
            }else if(item.getAttribute('id') == 'eat'){
                gameTitle.innerHTML += "<br>" + Catty.eat()
            }else if(item.getAttribute('id') == 'say'){
                gameTitle.innerHTML += "<br>" + Catty.say()
            }
        })
    })
}

main()