
var btns = document.querySelectorAll('button');
btns.forEach((button) => {
button.addEventListener('click', function (e) {
  displayWinner(playRound(setPlayer(button.textContent),computerPlay()));
});
});
function computerPlay(){
	return Math.floor(Math.random() * 3) + 1
}

function playRound(playerSelection,computerSelection){
	if(playerSelection == computerSelection){
		return("Tie game, You both choose: "  + getChoice(playerSelection));
	}else if(playerSelection == 1 && computerSelection == 3 || playerSelection == 2 && computerSelection == 1 || playerSelection == 3 && computerSelection == 2){
		return("You Win! The computer chose: " + getChoice(computerSelection));
	}else{
		return("You Lose...  The computer chose: " + getChoice(computerSelection));
	}
}

function setPlayer(p){
	p = p.toUpperCase();
	if(p == "ROCK"){
		return 1;
	}else if(p == "PAPER"){
		return 2;
	}else if(p == "SCISSORS"){
		return 3;
	}else{
		return setPlayer(prompt("Enter rock paper or scissors:"));
	}
}

function getChoice(x){
if(x == 1){
	return "Rock";
}else if(x == 2){
	return "Paper";
}else{
	return "Scissors";
}
}
function displayWinner(result){
	var display = document.querySelector(".results");
	display.textContent = result;
}

