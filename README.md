# Hot-Shot
America's favorite basketball league! 🏀


"Hot Shot"
          The HOT SHOT Game   
  
  
# Project Motivations-Goals 

        This game was created as my first project at General Assembly. I picked a basket ball game because it seemed to be a good project to create. My biggest challage of this game was to interact with in the html canvas. My goal is to have a fun interactive game that can be played by anyone. 

# Link to the actuarial site

Here is the link to HOT SHOT https://nykywanp.github.io/.
# HOT SHOT

This is a tradional game that was actuarially created on behalf of that All american allstars such as Michael Jordan. This sport became a league in 1946. This has been an American favorite every since. 

 # Setup Instructions
 1. Go to github and clone the project using the link below. https://github.com/NykywanP/Hot-Shot.git

 2. In your computers Terminal type git add .
 3. Once the file has been downloaded to your computer you can launch the file with the VS Code application.
 4. If you do not have the VS Code application please use the link below to download it. https://code.visualstudio.com/download
 5. You can launch the file by typing code . beside "Hot Shot" and it will open up in the VS Code application.
 6. Once the syntax has loaded create a feel make your own version game.
 
 
 # If you would like to contribute
   Feel free to make a pull request. 

# Technologies Used
Here is a fiew functions that gave me trouble(blockers)
```JS

function scoreCount(ball){
  var score = document.getElementById('score')
  if (655 > ball.x && ball.x > 640) {
    score.textContent = Number(score.textContent) + 1;
    gameOver(Number(score.textContent)) 
  }
  
  function gameOver(score) {
        if (score >=10) {
          document.getElementById("gameWins").innerHTML = "GOOD GAME. YOU WIN!";
        
        }
      }
  
  
    }
    






         


