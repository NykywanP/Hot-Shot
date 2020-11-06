function draw() {
  var drawing = document.getElementById("drawing");
  var con = drawing.getContext("2d");
  var picCan = document.getElementById("myCanvas");
  con.drawImage(picCan, 0, 0, 40, 40);
  var image2 = new Image();
  image2.src = "basketB";
  con.drawImage(image2, 20, 20, 40, 30);
}
console.log(draw)

canvasNode.width  = 100; // in pixels
canvasNode.height = 80; // in pixels
// Bring the picture into the canvas

//function myCa() { 
  ///let myCa = canvas.getContext("2d");
 //var canvas = document.getElementById("myCanvas");
  //var ctx = canvas.getContext("2d");
  //var x = canvas.width/2;
 //var y = canvas.height-30;
  //var dx = 2;
 //var dy = -2;
 // }
 // function drawBall() {
  //    ctx.beginPath();
 //     ctx.arc(x, y, 10, 0, Math.PI*2);
  //    ctx.fillStyle = "#0095DD";
  //    ctx.fill();
  //    ctx.closePath();
 // }
  //console.log(drawBall)
 
  //const ctx = draw;
  //function drawTwo() {
   //   ctx.clearRect(0, 0, canvas.width, canvas.height);
   //   drawBall();
    //  x += dx;
     // y += dy;
  //}
  
  ///setInterval(draw, 10);

