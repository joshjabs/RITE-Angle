var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example');

//game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('die', dieState);
game.state.add('win', winState);

//call boot state
game.state.start('boot');
