class Game{
    constructor(){

    }

    getState(){
    var gameStateref = database.ref('gameState')
    gameStateref.on("value",function(data){
    gameState = data.val()
    })
    }

    updateState(state){
    database.ref('/').update({
    gameState:state
    })       
    }

    start(){
    if (gameState === 0) {
    form = new Form()  
    form.display()
    runner = new Runner()   
    runner.getCount()
      
    }
    }

    play(){
    form.hide()
    if(message === 0){
    fill("black")
    textSize(20)        
    text("Game Starts",400,150)
    text("Press Space to Start",400,200)  
    }
    
    if (keyCode === 32 && message === 0) {
    console.log("message")
    text("welcome",400,400)          
    message = 1
    }

    }
}