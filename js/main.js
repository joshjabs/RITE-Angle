//initiate the Phaser framework
var game = new Phaser.Game(592, 360, Phaser.AUTO);

var GameState = {
    
    //initiate game settings
    init: function (){
        
    },
    
    //load the game assets before the game starts
    preload: function (){
        this.load.image('platform', 'assets/images/Platform1.png');
    this.load.image('triangle', 'assets/images/triangle1.png');
    this.load.image('circle', 'assets/images/circle1.png');    

    },
    
    //execute after everything is loaded
    create: function (){
      game.stage.backgroundColor = "#ffffff"
        
      this.platform1 = this.game.add.sprite(148, 100, 'platform');
      this.platform2 = this.game.add.sprite(148, 0, 'platform');
        
      this.circle1 = this.game.add.sprite(350, 300, 'circle')
      this.circle1.anchor.setTo(0.5, 0.5);
      this.circle1.scale.setTo(0.3);
        
      this.triangle1 = this.game.add.sprite(225, 200, 'triangle');
      this.triangle1.anchor.setTo(0.5, 0.5);
      this.triangle1.scale.setTo(1, 0.8);
      this.triangle1.angle = -55;
        
      this.platform3 = this.game.add.sprite(500, 250, 'platform');
      this.platform3.anchor.setTo(0.5, 0.5);
      this.platform3.scale.setTo(0.4, 1);
      this.platform3.angle = 10;
        
      this.startPlatform = this.game.add.sprite(100, 190, 'platform');
      this.startPlatform.angle = 90;
      this.startPlatform.scale.setTo(0.5, 5);
    },
    
    update: function (){
        
    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');