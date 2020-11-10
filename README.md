# Hot-Shot
America's favorite basketball league! 🏀

My Project Framework

```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;

var ball = {
  x: 10,
  y: 10,
  vx: 5,
  vy: 1,
  radius: 40,
  color: '#C9082A',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(400, 400, 400, 0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e) {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
    drawGoal();
  }
  console.log(ball)
});

canvas.addEventListener('click', function(e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

  // let cx = document.querySelector("canvas").getContext("2d");
  // let img = document.createElement("img");
  // img.src = "https://banner2.cleanpng.com/20180320/qyw/kisspng-backboard-ncaa-men-s-division-i-basketball-tournam-basketball-hoop-png-transparent-5ab1b00c2d0b99.9652717415215943801845.jpg";
  // img.addEventListener("load", () => {
  //   for (let x = 10; x < 200; x += 30) {
  //     cx.drawImage(img, x, 10);
  //   }
  // });

  function drawGoal() {
     let cx = document.querySelector("canvas").getContext("2d");
     let img = document.createElement("img");
     img.src = "https://banner2.cleanpng.com/20180320/qyw/kisspng-backboard-ncaa-men-s-division-i-basketball-tournam-basketball-hoop-png-transparent-5ab1b00c2d0b99.9652717415215943801845.jpg";
     img.addEventListener("load", () => {
       for (let x = 10; x < 200; x += 30) {
         cx.drawImage(img, x, 10);
       }
  });
   }
  

   var timer;
var minute = 2
var seconds = minute * 60
var textSec = "00"
var display = document.getElementById("display");
display.innerHTML = minute + ':00'

function start(){
    var statSec = 60
    timer = setInterval(function(){
        seconds--;
        if(statSec != 0)
            statSec--
        else
            statSec = 59

        if(statSec < 10)
            textSec = '0' + statSec
        else 
            textSec = statSec

        display.innerHTML = Math.floor(seconds/60) + ':' + textSec

        if(seconds == 0)
            clearInterval(timer)
    }, 1000)
}

function stop(){
    clearInterval(timer)
}

function cancel(){
    console.log("asdasd");
    clearInterval(timer)
    display.innerHTML = minute + ':00'
    seconds = minute * 60
}
var resetButton = document.getElementById('resetButton');
console.log(resetButton)
resetButton.onclick= reloadPage;

function reloadPage(){
   window.location.reload();
}

function scoreCount(ball){
  var score = document.getElementById('score')
  if (655 > ball.x && ball.x > 640) {
    score.textContent = Number(score.textContent) + 1;
  }
  console.log(score);
}
```


```css
{
  box-sizing-box;
  }
  body {
    background-image: url("https://thumbs.gfycat.com/OrdinaryHeartfeltAnchovy-small.gif");
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: fixed;
  }
  nav {
     background: red;
     width: 100%;
     overflow: auto;
  }
  ul {
      margin: 0;
      padding: 0;
      list-style: none;
  }
  li {
      float: left;
  }
  nav a {
      width:120px;
      display: block;
      text-decoration: underline;
      text-align: center;
      background: black;
      font-size: 17px;
      color: rgb(211, 199, 199);
      padding: 20px 10px;
      font-family: Arial;
      
  }
  nav a:hover {
  
  }
  h1 {
    text-shadow: 0 0 6px red;
    text-align: center;
    font-size: 70px;
  }
  .btn-group button:hover {
    background-color: black;
  }
  footer {
  text-align: center;
  color: black;
}
.btn-group button {
  background-color: red;
  border: 3px solid white; 
  color: white; 
  padding: 20px 40px; 
  cursor: pointer; 
  float: left;
  font-size: 22px;
  border-top-style: inherit;
}
* { padding: 0; margin: 0; }
    	canvas { background: white; display: block; margin: 0 auto; 
}
h4 {
  text-align: center;
  color: black;
  text-shadow: 0 0 1px red;
}
h2 {
  color: black;
  text-shadow: 0 0 1px red;
  font-size: 40px;
}
h5 {
  text-align: center;
  color: black;
}
button {
  background-color: red;
  border: 1px transparent;
  -webkit-border-radius: 40px;
  border-radius: 50px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Arial;
  font-size: 15px;
  padding: 12px 35px;

}
```

```html
<!DOCTYPE html>
    <head>
        <title>Hot Shot</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <nav>
            <ul>
            <li><a href="https://www.nba.com/2020-season-update">NBA Updates</a></li>
            <li><a href="https://www.nba.com/allstar/2020/draft">Allstar Players</a></li>
            </ul>
            </nav>
        <img src="https://media3.giphy.com/media/2WH6P8Z2yYbarCFLl8/source.gif">
     <p>
        <marquee><h1>'Hot Shot Game' 🏀 🏀🏀   🏀🏀  LETS GET IT!! 🏀 🏀 🏀🏀 THE AMERICAN ALLSTARS 🏀 🏀🏀 🏀 'Shoot & Score' 🏀 🏀🏀 🏀🏀 All we do is WIN! WIN! WIN! 🏀🏀🏀</h1></marquee>
  </p>

<canvas id="canvas" width="1200" height="500"></canvas>
<div class="scoresOne" id="notes">
    <!-- <p id='score'></p> -->
  <h2> score:<span id="score">0</span> 
    <button id="resetButton">reset</button>
  </div> </h2>
<h4>How many Shots can you make in 2:00 minutes</h4>
<blink><h5>Move the mouse 🐭 to shoot the ball in the goal</h5></blink>
<p>
<audio controls autoplay>
    <source src="file:///Users/nykywan.parker/Desktop/SEI-1019/Unit_1/delieverable/Hot-Shot/Lil-Troy-I-wanna-be-a%20baller.mp3" type="audio/mpeg">
  </audio>
</p>
<section class="section">
    <h1 id="display">2:00</h1>
    <div class="buttons">
      <button onclick="start()">Start Clock</button>
      <button onclick="stop()">Stop Clock</button>
      <button onclick="cancel()">Clock Reset</button>
    </div>
  </section>
  
</div>
<p>
   <script src="app.js"></script>
   </p>
    </body>

    <footer><a href="https://play.google.com/store/search?q=basketball%20games&c=apps&hl=en_US">Download the lastest basketball GAMES in the Google App Store</a>
    <h5>Copyright © 2010-2020 Hot Shot</h5>
    </footer>
</html>
```
<head> <title> "Hot Shot" </title> </head>
          <h1> HOT SHOT </h1>
         
1. Go to github and clone the project using the link below.
``` https://github.com/NykywanP/Hot-Shot.git```
2. In your computers Terminal type git add .
3. Once the file has been downloaded to your computer you can launch the file with the VS Code application. 
4. If you do not have the VS Code application please use the link below to download it. 
```https://code.visualstudio.com/download```
5. You can launch the file by typing code . beside "Hot Shot" and it will open up in the VS Code application. 
6. Once the syntax has loaded create a feel make your own version game.
7. Google is always a good resource to use. 
<h2> 
8. I HOPE YOU ENJOY THE GAME!
</h2>
</html>

