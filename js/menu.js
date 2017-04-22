var menuState = {
    
    create: function() {
        
        //display
        var nameLabel = game.add.text(80, 80, 'Rite Angle', {font: '50px Arial', fill: '#ffffff'});
        
        var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to start', {font: '25px Arial', fill: '#ffffff'});
        
        //define the w key 
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        //when the w key is down we call the start function
        wkey.onDown.addOnce(this.start, this);
    },
    
    //start game
    start: function() {
    game.state.start('play');
 },
};