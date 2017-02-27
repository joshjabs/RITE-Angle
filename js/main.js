    //initiate the Phaser framework
    var controls = {};
    var game = new Phaser.Game(800, 800, Phaser.AUTO); 

    var GameState = {



      //initiate game settings
      init: function() {},

      //load the game assets before the game starts
      preload: function() {
        this.game.load.spritesheet('player', 'assets/therun.png', 280, 385);
        this.game.load.tilemap('tilemap', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/tiles_spritesheet.png');
      },

      //execute after everything is loaded
      create: function() {

        controls = {
          right : this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
          left : this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
          up : this.input.keyboard.addKey(Phaser.Keyboard.UP),
        };


        //Start the Arcade Physics systems
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //Change the background colour
        this.game.stage.backgroundColor = "#a9f0ff";

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

        //Add the sprite to the game and enable arcade physics on it
        this.sprite = this.game.add.sprite(50, 50, 'player');
        
        this.game.physics.arcade.enable(this.sprite);

        //Change the world size to match the size of this layer
        this.groundLayer.resizeWorld();

        //Set some physics on the sprite
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 2000;
        this.sprite.body.gravity.x = 20;
        this.sprite.body.velocity.x = 0;
          
        //Create a running animation for the sprite and play it
        this.sprite.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
//      this.sprite.animations.play('right');


        //Make the camera follow the sprite
        this.game.camera.follow(this.sprite);

        //Enable cursor keys so we can create some controls
        this.cursors = this.game.input.keyboard.createCursorKeys();


      },

      update: function() {

        //Make the sprite collide with the ground layer
        this.game.physics.arcade.collide(this.sprite, this.groundLayer);         

        if(controls.up.isDown){
            this.sprite.body.velocity.y = -600;

        }

        if(this.cursors.right.isDown){
//          this.sprite.body.bounce.y = 0.2;
            this.sprite.animations.play('right');
            this.sprite.body.velocity.x = 850;
        }
          
        if(this.cursors.right.isUp){
            this.sprite.animations.stop(null, true);
            this.sprite.body.velocity.x = 0;
        }
          

        if(controls.left.isDown){
          this.sprite.body.bounce.y = 0.2;
        }


     }
    };

    game.state.add('GameState', GameState);
    game.state.start('GameState');