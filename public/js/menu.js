
var isAlive, currentLevel=1;

var menuState = {

    init: function(alive, level) {
      isAlive = alive;
      currentLevel = level;
      console.log(isAlive);
    },

    create: function() {
      game.world.removeAll();

        menu = this.game.add.sprite(0, 0,'menu');

        //display
        var nameLabel = game.add.text(80, 80, 'Rite Angle', {font: '50px Arial', fill: '#000000'});

        if(isAlive){
          var startLabel = game.add.text(80, 160, ('press the "W" key to start level ' + currentLevel), {font: '25px Arial', fill: '#000000'});

        } else {
          var startLabel = game.add.text(80, 160, 'You died :(', {font: '25px Arial', fill: '#000000'});
          var start2Label = game.add.text(80, 190, 'Press W to try again', {font: '25px Arial', fill: '#000000'});

          // <?php
          //   DB::table('game_histories')->insert(
          //       ['name' => 'guest', 'score' => 5]
          //   );
          // ?>
        }

        //define the w key
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

        //when the w key is down we call the start function
        wkey.onDown.addOnce(this.start, this);
    },

    //start game
    start: function() {
    game.state.start('play', true, false, currentLevel);

 },


};
