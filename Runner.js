class Runner{
    constructor(){
    this.index = 0
    this.name = null
    }  


    getCount(){
    var playerCountref = database.ref('PlayerCount')
    playerCountref.on("value",function(data){
    PlayerCount = data.val()
    })
    }

    update(){
    playerIndex = "Players/Player" + this.index
    console.log(playerIndex)
    database.ref(playerIndex).set({
    name:this.name
    })
    }

    updateCount(count){
    database.ref('/').update({
    PlayerCount:count
    })
    }

    static getPlayerInfo(){
    var playerInfoRef = database.ref('players')
    playerInfoRef.on("value",function(data){
    allplayers = data.val()
    })
    }
    }