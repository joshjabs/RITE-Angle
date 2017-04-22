var bootState = {
    
    create: function () {
        
        //add physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //call load state
        game.state.start('load');
    }
}