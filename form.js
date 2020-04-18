class form {

    constructor(){

    }
    display(){
    
        var title = createElement('h2');
        title.html("Car Racing"); 
        title.position(170,10);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton('Play');
        button.position(250,250);

        var Greeting = createElement('h3');
      
    
    button.mousePressed ( function() {

        input.hide();
        button.hide();
        var name = input.value();
        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);

        Greeting.html("Welcome " + name);
        Greeting.position(250,50);

    });

    }

}
