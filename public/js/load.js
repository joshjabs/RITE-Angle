var loadState = {

    preload: function() {



        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});


        //load in assets
        this.game.load.spritesheet('player', 'assets/animated.png', 32, 32);
        this.game.load.tilemap('tilemap', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('tilemap2', 'assets/level2.json', null, Phaser.Tilemap.TILED_JSON);

        this.game.load.image('tiles', 'assets/tiles_spritesheet.png');
        this.game.load.audio('music', 'assets/The_Dirty_Moogs_-_Side_Scroller.mp3');
        this.game.load.image('background', 'assets/city_background_night.png');
        this.game.load.image('ball', 'assets/geoball.png');
        this.game.load.image('square', 'assets/square.png');
        this.game.load.image('menu', 'assets/menu_guy2.png');
        this.game.load.image('menu', 'assets/menu_guy2.png');
        this.game.time.advancedTiming = true;
    },


    create: function() {

    //call menu state
    var isAlive = true;
    game.state.start('menu', true, false, isAlive, 1);
 }
};
