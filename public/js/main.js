

    //initiate the Phaser framework
    var controls = {};
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example');


    var GameState = {



      //initiate game settings
      init: function() {},

      //load the game assets before the game starts
      preload: function() {
        this.game.load.spritesheet('player', 'assets/animated.png', 32, 32);
        this.game.load.tilemap('tilemap', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/tiles_spritesheet.png');
        this.game.load.audio('music', 'assets/The_Dirty_Moogs_-_Side_Scroller.mp3');
        this.game.load.image('background', 'assets/city_background_night.jpg');
        this.game.load.image('ball', 'assets/geoball.png');
          this.game.load.image('square', 'assets/square.png');
        this.game.time.advancedTiming = true;

      },

      //execute after everything is loaded
      create: function() {

        controls = {
          right : this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
          left : this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
          up : this.input.keyboard.addKey(Phaser.Keyboard.UP),
          spacebar : this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
        };

        //Play music in background
        song = game.add.audio('music');
        song.play();

        //Start the Arcade Physics systems
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //Change the background colour
        // this.game.stage.backgroundColor = "#a9f0ff";
        this.game.add.tileSprite(0, 0, 4000, 1200, 'background');

        //Add the tilemap and tileset image. The first parameter in addTilesetImage
        //is the name you gave the tilesheet when importing it into Tiled, the second
        //is the key to the asset in Phaser
        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tiles128', 'tiles');

        //Add both the background and ground layers. We won't be doing anything with the
        //GroundLayer though
        this.backgroundlayer = this.map.createLayer('BackgroundLayer');
        this.groundLayer = this.map.createLayer('GroundLayer');

        //Before you can use the collide function you need to set what tiles can collide
        this.map.setCollisionBetween(1, 100, true, 'GroundLayer');

        //Add the player to the game and enable arcade physics on it
        this.sprite = this.game.add.sprite(50, 50, 'player');
        this.game.physics.arcade.enable(this.sprite);

        //Add ball to the game and enable arcade physics on it
        ball = this.game.add.sprite(0, 0,'ball');
        this.game.physics.arcade.enable(ball);

        //Add square to the game and enable arcade physics on it
        square = this.game.add.sprite(0, 0,'square');
        this.game.physics.arcade.enable(square);

        //Change the world size to match the size of this layer
        this.groundLayer.resizeWorld();

        //Set some physics on the sprite
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 2000;
        this.sprite.body.gravity.x = 20;
        this.sprite.body.velocity.x = 0;

        //If player hits bounds reset position to start
        this.sprite.checkWorldBounds = true;
        this.sprite.events.onOutOfBounds.add(playerOut, this);

        function playerOut (sprite) {
          sprite.reset(sprite.x, 50);
          sprite.reset(sprite.y, 50);
        }


        //Create a animation for the sprite and play it
        this.sprite.animations.add('right', [1,2,3,4,5,6,7,8,9], 22, true);
        this.sprite.animations.add('jump', [0], 10,  true);
        this.sprite.animations.add('shoot', [10], 10, true);

        //Make the camera follow the sprite
        this.game.camera.follow(this.sprite);

        //Enable cursor keys so we can create some controls
        this.cursors = this.game.input.keyboard.createCursorKeys();

        pause_label = game.add.text(20, 20, 'Pause', {
       font: '24px Arial',
       fill: '#fff'
       });
       pause_label.fixedToCamera = true;

       pause_label.inputEnabled = true;
       pause_label.events.onInputUp.add(function() {
       game.paused = true;
       });

       // Add a input listener that can help us return from being paused
       game.input.onDown.add(unpause, self);

       function unpause(event) {
         if (game.paused) {
            game.paused = false;
            pause_label.text="Pause";
        } else {
          pause_label.text="Play";
          }

    };
      },


      update: function() {

        //initialize parameters for throwBall
        var x, y;
        var _aSprite = this.aSprite;

        //function that throws ball
        function throwBall(_aSprite, x, y){
        _aSprite.x = x;
        _aSprite.y = y;
        _aSprite.body.bounce.y = 0.8;
        _aSprite.body.gravity.y = 2500;
        _aSprite.body.gravity.x = 20;
        _aSprite.body.velocity.x = 900;
        _aSprite.body.velocity.y = -900;
        }

        //function that throws square
        function throwSquare(_aSprite, x, y){
        _aSprite.x = x;
        _aSprite.y = y;
        _aSprite.body.gravity.y = 4500;
        _aSprite.body.gravity.x = 2000;
        _aSprite.body.velocity.x = 400;
        _aSprite.body.velocity.y = -900;
        }

        var score = (this.sprite.body.x / 100);
        document.getElementById("hud").innerText=Math.round(score);
        if (score > document.getElementById("topScore").innerText){
          document.getElementById("topScore").innerText=Math.round(score);
        }
        //Make the sprite collide with the ground layer
        this.game.physics.arcade.collide(this.sprite, this.groundLayer);
        this.game.physics.arcade.collide(ball, this.groundLayer);
        this.game.physics.arcade.collide(square, this.groundLayer);

//        if(this.sprite.body.onFloor() == true){
        this.sprite.animations.play('right');
//        }
//          else{
//              this.sprite.animations.play('jump');
//          }
        this.sprite.body.velocity.x = 500;

        if(this.cursors.up.isDown && this.sprite.body.onFloor() == true){
            this.sprite.body.velocity.y = -950;
            this.sprite.animations.play('jump');
        }

        if(this.cursors.right.isDown){
            this.sprite.body.velocity.x = 700;
        }

        if(this.cursors.left.isDown ){
            this.sprite.animations.play('shoot');
            throwBall(ball, this.sprite.x + 20, this.sprite.y);
        }

        if(this.cursors.down.isDown ){
            this.sprite.animations.play('shoot');
            throwSquare(square, this.sprite.x + 20, this.sprite.y);
        }


        //check to see if player "catches" ball
        function collisionHandler(_player, _ball) {ball.x = this.sprite - 200; ball.y=0;  this.sprite.animations.play('shoot');}
        game.physics.arcade.overlap(this.sprite, ball, collisionHandler, null, this)

        //print sprite info to screen
//        this.game.debug.spriteInfo(this.sprite, 20, 75);

      }
    };

    game.state.add('GameState', GameState);
    game.state.start('GameState');
