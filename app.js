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
  scoreCount(ball);
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
    clearInterval(timer)
    display.innerHTML = minute + ':00'
    seconds = minute * 60
}
var resetButton = document.getElementById('resetButton');
resetButton.onclick= reloadPage;

function reloadPage(){
   window.location.reload();
}

function scoreCount(ball){
  var score = document.getElementById('score')
  if (655 > ball.x && ball.x > 640) {
    score.textContent = Number(score.textContent) + 1;
  }
}

