class Form{
    constructor(){
        
        this.index = createElement('h2')
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.button2 = createButton("Reset")
        this.greeting = createElement('h3')
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
        this.index.html("Runner Game")
        this.index.position(350,100)
        this.input.position(350,300)
        this.button.position(350,350)
        this.button2.position(700,100)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            runner.name = this.input.value();
            PlayerCount = PlayerCount + 1;
            runner.index = PlayerCount;
            console.log(runner.index + "index")
            runner.update();
            runner.updateCount(PlayerCount);
            this.greeting.html("Hello " + runner.name)
            this.greeting.position(400,200);
          });
      
          this.button2.mousePressed(()=>{
            runner.updateCount(0);
            game.updateState(0);
          });
        
    }
    
}