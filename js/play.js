var score;

var playState = {
       create: function() {

        var controls = {
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
        this.game.add.tileSprite(0, 0, 10000, 1200, 'background');

        //Add the tilemap and tileset image. The first parameter in addTilesetImage
        //is the name you gave the tilesheet when importing it into Tiled, the second
        //is the key to the asset in Phaser
        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tiles128', 'tiles');
        game.physics.arcade.TILE_BIAS = 32;

        //Add both the background and ground layers. We won't be doing anything with the
        //GroundLayer though
        this.backgroundlayer = this.map.createLayer('BackgroundLayer');
        this.groundLayer = this.map.createLayer('GroundLayer');
        this.game.stage.backgroundColor = "white";


        //Before you can use the collide function you need to set what tiles can collide
        this.map.setCollisionBetween(1, 100, true, 'GroundLayer');

        //Add the player to the game and enable arcade physics on it
        var triangle = [];
	    triangle[0] = this.game.add.sprite(370,330, 'triangle');
	    triangle[1] = this.game.add.sprite(470,330, 'triangle');
	    triangle[2] = this.game.add.sprite(570,330, 'triangle');
	    triangle[4] = this.game.add.sprite(870,540, 'triangle');
	    triangle[5] = this.game.add.sprite(970,540, 'triangle');
	    triangle[6] = this.game.add.sprite(1070,540, 'triangle');
	    triangle[7] = this.game.add.sprite(1170,540, 'triangle');
	    triangle[8] = this.game.add.sprite(1270,540, 'triangle');
	    triangle[9] = this.game.add.sprite(1370,540, 'triangle');
	    triangle[10] = this.game.add.sprite(1470,400, 'triangle');
	    triangle[11] = this.game.add.sprite(1570,400, 'triangle');
	    triangle[12] = this.game.add.sprite(1670,400, 'triangle');
	    triangle[13] = this.game.add.sprite(1770,400, 'triangle');
	    triangle[14] = this.game.add.sprite(1870,400, 'triangle');
	    triangle[15] = this.game.add.sprite(1970,400, 'triangle');
	    triangle[16] = this.game.add.sprite(2070,400, 'triangle');
	    triangle[17] = this.game.add.sprite(2170,400, 'triangle');
	    triangle[18] = this.game.add.sprite(2270,400, 'triangle');
	    triangle[19] = this.game.add.sprite(2370,400, 'triangle');
	    triangle[20] = this.game.add.sprite(2470,400, 'triangle');
	    triangle[21] = this.game.add.sprite(2570,400, 'triangle');
	    triangle[22] = this.game.add.sprite(2770,120, 'triangle');
	    triangle[23] = this.game.add.sprite(2870,120, 'triangle');
	    triangle[24] = this.game.add.sprite(2970,120, 'triangle');
	    triangle[25] = this.game.add.sprite(3070,120, 'triangle');
	    triangle[26] = this.game.add.sprite(3170,120, 'triangle');
	    triangle[27] = this.game.add.sprite(3270,120, 'triangle');
	    triangle[28] = this.game.add.sprite(3370,120, 'triangle');
	    triangle[29] = this.game.add.sprite(3470,120, 'triangle');
	    triangle[30] = this.game.add.sprite(3570,200, 'triangle');
	    triangle[31] = this.game.add.sprite(3970,300, 'triangle');
	    triangle[32] = this.game.add.sprite(4000,280, 'triangle');
	    triangle[33] = this.game.add.sprite(4030,260, 'triangle');
	    triangle[34] = this.game.add.sprite(4060,240, 'triangle');
	    triangle[35] = this.game.add.sprite(4090,220, 'triangle');
	    triangle[36] = this.game.add.sprite(4120,200, 'triangle');
	    triangle[37] = this.game.add.sprite(4150,180, 'triangle');
	    triangle[38] = this.game.add.sprite(5070,400, 'triangle');
	    triangle[39] = this.game.add.sprite(5100,380, 'triangle');
	    triangle[40] = this.game.add.sprite(5130,360, 'triangle');
	    triangle[41] = this.game.add.sprite(5430,540, 'triangle');
	    triangle[42] = this.game.add.sprite(5530,540, 'triangle');
	    triangle[43] = this.game.add.sprite(6530,610, 'triangle');
	    triangle[44] = this.game.add.sprite(6430,610, 'triangle');
	    triangle[45] = this.game.add.sprite(6630,610, 'triangle');
	     triangle[46] = this.game.add.sprite(6730,610, 'triangle');
	      triangle[47] = this.game.add.sprite(6830,610, 'triangle');
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
          song.stop();

          if(score > 69) {
              game.state.start('menu', true, false, true, 2);
              song = game.add.audio('cheer');
        song.play();
          } else {
              game.state.start('menu', true, false, false, 1);
              song = game.add.audio('boo');
        song.play();
          }


        }

        //Create a animation for the sprite and play it
        this.sprite.animations.add('right', [1,2,3,4,5,6,7,8,9], 22, true);
        this.sprite.animations.add('jump', [0], 10,  true);
        this.sprite.animations.add('shoot', [10], 10, true);

        //Make the camera follow the sprite
        this.game.camera.follow(this.sprite);

        //Enable cursor keys so we can create some controls
        this.cursors = this.game.input.keyboard.createCursorKeys();

//PAUSE
      pause_label = game.add.text(20, 20, 'Pause', {
         font: '24px Arial',
         fill: '#000000'
       });
       pause_label.fixedToCamera = true;

       pause_label.inputEnabled = true;
       pause_label.events.onInputUp.add(function() {
         game.paused = true;
        });


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

        score = (this.sprite.body.x / 100);
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
this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        if(this.spaceKey.isDown ){
            this.sprite.animations.play('shoot');
            throwSquare(square, this.sprite.x + 20, this.sprite.y);
        }


        //check to see if player "catches" ball
        //function collisionHandler(_player, _ball) {ball.x = this.sprite - 200; ball.y=0;  this.sprite.animations.play('shoot');}
        //game.physics.arcade.overlap(this.sprite, ball, collisionHandler, null, this);
        function collisionHandler(_player, _triangle)
        {
			alert('here');
		}
        
       // function collisionHandler(_triangle, _gound) {ball.x = this.sprite - 200; ball.y=0;  this.sprite.animations.play('shoot');}

        //print sprite info to screen
//        this.game.debug.spriteInfo(this.sprite, 20, 75);

      }
    };


//    Die: function() {
//        game.state.start('die');
//    }

//    Win: function() {
//        game.state.start('win');
//    }
