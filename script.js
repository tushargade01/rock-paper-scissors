let score = JSON.parse(localStorage.getItem('allscore')) || {
  win:0,
  lose:0,
  tie:0
};

function allMoveUpdate(value){
  if(value === 'rock'){
    computerMoveUpdate();
    if(computerMove==='rock'){
      result = 'tie'
    }
    else if(computerMove === 'paper'){
      result = 'you lose'
    }
    else if(computerMove === 'scissors'){
      result = 'you win'
    }
   
}
  
  else if(value === 'paper'){
    computerMoveUpdate();
    if(computerMove==='rock'){
      result = 'you win'
    }
    else if(computerMove === 'paper'){
      result = 'tie'
    }
    else if(computerMove === 'scissors'){
      result = 'you lose'
    }
  
}
else if(value === 'scissors'){
    computerMoveUpdate();
    if(computerMove==='rock'){
      result = 'you lose'
    }
    else if(computerMove === 'paper'){
      result = 'you win'
    }
    else if(computerMove === 'scissors'){
      result = 'tie'
    }
}

    scoreUpdate(result);
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img class="finalYouComputer" src=".//images/${value}-emoji.png">
     <img class="finalYouComputer" src=".//images/${computerMove}-emoji.png"> Computer`;
    jsScoreUpdate();
  }
  function jsScoreUpdate(){
    document.querySelector('.total-score-display').innerHTML =  `Win: ${score.win}, Losses: ${score.lose}, Tie: ${score.tie}`;
    }
    //random number    
function computerMoveUpdate(){
  let randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber < 1/3) 
      {
        computerMove = 'rock'
      }
  else if(randomNumber >= 1/3 && randomNumber < 2/3) 
      {
        computerMove = 'paper'
      }
  else if(randomNumber >= 2/3 && randomNumber < 1) 
      {
        computerMove = 'scissors'
      }

      return computerMove;
}
 //score function
function scoreUpdate(result){
  if(result === 'you win'){

    score.win += 1; 
  }
  else if(result === 'you lose'){
    score.lose += 1; 
  }
  else if(result === 'tie'){
    score.tie += 1; 
  }
  localStorage.setItem('allscore',JSON.stringify(score))
}
