var winState = {
    
    create: function() {
        
        //win message
        var winLabel = game.add.text(80, 80, 'YOU WON!', {font: '50px Arial', fill: '#00ff00'});
        
        var startLabel = game.add.text(80, game.world.height-80, 'press the "W" key to restart', {font: '25px Arial', fill: '#ffffff'});
        
        //define the w key 
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        //when the w key is down we call the start function
        wkey.onDown.addOnce(this.restart, this);
    },
    
    restart: function() {
    game.state.start('menu');
 },
}