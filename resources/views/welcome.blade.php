<!doctype html>
<html lang="{{ config('app.locale') }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

  <!-- Styles -->
  <style>
    html,
    body {
      background-color: #fff;
      color: #636b6f;
      font-family: 'Raleway', sans-serif;
      font-weight: 100;
      height: 100vh;
      margin: 0;
    }

    .full-height {
      height: 100vh;
    }

    .flex-center {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .position-ref {
      position: relative;
    }

    .top-right {
      position: absolute;
      right: 10px;
      top: 18px;
    }

    .content {
      text-align: center;
    }

    .title {
      font-size: 84px;
    }

    .links > a {
      color: #636b6f;
      padding: 0 25px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
    }

    .m-b-md {
      margin-bottom: 30px;
    }
  </style>


  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>



  <title>RITE Angle</title>
  <script src="/js/phaser.js"></script>
</head>
</body>

<nav class="navbar navbar-default">
  <div class="container-fluid">
      @if (Route::has('login'))
      <div class="top-right links">
        @if (Auth::check())
          <a href="{{ url('/home') }}">Home</a>
        @else
          <a href="{{ url('/login') }}">Login</a>
          <a href="{{ url('/register') }}">Register</a>
        @endif
      </div>
      @endif

    </div>

</nav>


<body>
  <center>
    <div style="position:absolute;height:600px; width:300px; right:0px; top 0;background:#2eb8b8;">
      LEADER BOARD
      <hr> Top Score:
      <div id="topScore">0</div>
    </div>

    <div id="phaser-example"></div>
    <br>
    <br>
    <div style="background:skyblue;display:inline;">Points:
      <div id="hud" style="background:skyblue;display:inline;"></div>
    </div>
    <br>
    <br>

    <script src="/js/boot.js"></script>
    <script src="/js/load.js"></script>
    <script src="/js/menu.js"></script>
    <script src="/js/play.js"></script>
    <script src="/js/die.js"></script>
    <script src="/js/win.js"></script>
    <script src="/js/game.js"></script>

    <div style="bottom:100px; width=100%;height:400px;background:grey;">
      <br>
      <br>
      <br>ADVERTISEMENTS CAN GO HERE</div>
  </center>



</body>

</html>
