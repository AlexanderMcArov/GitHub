let game = {
    player: ['Sanya','NeSanya'],
    gameTable:[
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ],
    wait: 0,
    log: 1,
    check: function(arg){
        return 'CheckFunction ' + arg
    }
}

console.log(game.check(5));
