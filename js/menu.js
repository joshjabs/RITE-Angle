var isAlive, currentLevel;

var menuState = {

    init: function(alive, level) {
      isAlive = alive;
      currentLevel = level;
      console.log(isAlive);
    },

    create: function() {

        //display
        var nameLabel = game.add.text(80, 80, 'Rite Angle', {font: '50px Arial', fill: '#ffffff'});

        if(isAlive){
          var startLabel = game.add.text(80, 160, 'press the "W" key to start', {font: '25px Arial', fill: '#ffffff'});
          if(currentLevel>1){
            var start2Label = game.add.text(80, 190, 'Completed Level 1!', {font: '25px Arial', fill: '#ffffff'});
          }
        } else {
          var startLabel = game.add.text(80, 160, 'You died :(', {font: '25px Arial', fill: '#ffffff'});
          var start2Label = game.add.text(80, 190, 'Press W to try again', {font: '25px Arial', fill: '#ffffff'});
        }

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
