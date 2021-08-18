function gameStart(){
	let takeMatch=document.querySelector(".match");
	takeMatch.classList.add("fadeout");
	let pScore=0;
	let cScore=0;
	const pName=prompt("Enter Your Name");
	const playerName=document.querySelector(".first h2");
	playerName.textContent=`${pName}`;
function scoreSee(){
let playButton=document.querySelector(".intro button");
let changeIntro=document.querySelector(".intro");
playButton.addEventListener("click",function(){
	changeIntro.classList.add("fadeout");
	takeMatch.classList.add("fadein");
});

};

//starting the game
function playMatch(){
	const getOption=document.querySelectorAll(".option button");
	const pHand=document.querySelector(".player-hand");
	const cHand=document.querySelector(".computer-hand");
	const computerOptions=["rock","paper","scissor"];
	getOption.forEach(function (ab){
		ab.addEventListener("click",function(){
			const aNumber=Math.floor(Math.random()*3);
			const computerChoice=computerOptions[aNumber];
			pHand.src=`images/${this.textContent}.png`;
			cHand.src=`images/${computerChoice}.png`;
			winnerDeclare(this.textContent,computerChoice);
		});
	});

	
	
};
//update scoboard
function updateScore(){
	const pBoard=document.querySelector(".first p");
	const cBoard=document.querySelector(".second p");
	pBoard.textContent=`${pScore}`;
	cBoard.textContent=`${cScore}`;

}
//winner declare
function winnerDeclare(playerChoice,computerChoice){
	const winner=document.querySelector(".winner");
	if(playerChoice===computerChoice){
		winner.textContent="It's a Tie!";
		return;
	}
	//for rock
	if(playerChoice==="rock"){
		if(computerChoice==="scissor"){
		winner.textContent=`${pName} is the Winner!`;
		pScore++;
		updateScore();
		finalWinner();
	return;
	}
	else{
      winner.textContent="Computer is the Winner";
      cScore++;
      updateScore();
      finalWinner();
      return;

	}
	}

//for paper
if(playerChoice==="paper"){
		if(computerChoice==="rock"){
		winner.textContent=`${pName} is the Winner!`;
		pScore++;
		updateScore();
		finalWinner();
	return;
	}
	else{
      winner.textContent="Computer is the Winner";
      cScore++;
      updateScore();
      finalWinner();
      return;

	}
	}

	//for scissor
	if(playerChoice==="scissor"){
		if(computerChoice==="paper"){
		winner.textContent=`${pName} is the Winner!`;
		pScore++;
		updateScore();
		finalWinner();
	return;
	}
	else{
      winner.textContent="Computer is the Winner";
      cScore++; 
      updateScore();
      finalWinner();
      return;
	}
	}
};
 function finalWinner(){
 	if(pScore===5){
 	
 		const pBoard=document.querySelector(".first p");
	const cBoard=document.querySelector(".second p");
	pBoard.textContent=`${pScore}`;
	cBoard.textContent=`${cScore}`;
	
 		const finalResult=document.querySelector(".score");
 		let  gameVanish=document.querySelector(".match");
 		let afterWin=document.querySelector(".play-again");
 		let winnerName=document.querySelector(".play-again h2");
 		let winnerScore=document.querySelector(".play-again h1");
 		let playAgain=document.querySelector(".play-again button");
 		finalResult.classList.add("fadeout");
 		gameVanish.classList.remove("fadein");
 		afterWin.classList.add("fadein");
 		winnerScore.textContent=`${pName} = ${pScore}\u00A0\u00A0\u00A0Computer = ${cScore}`;
 		winnerName.textContent=`Winner,Winner Beef Burger ! Congratulations ${pName} !!`;
 		pScore=0;
 		cScore=0;
 		playAgain.addEventListener("click",function(){
 			finalResult.classList.remove("fadeout");
gameVanish.classList.add("fadein");
 			afterWin.classList.remove("fadein");
 		});

 	}
 	if(cScore===5){
 		
 		const pBoard=document.querySelector(".first p");
	const cBoard=document.querySelector(".second p");
	pBoard.textContent=`${pScore}`;
	cBoard.textContent=`${cScore}`;
	
 		const finalResult1=document.querySelector(".score");
 		let  gameVanish=document.querySelector(".match");
 		let afterWin=document.querySelector(".play-again");
 		let winnerScore=document.querySelector(".play-again h1");
 		let winnerName=document.querySelector(".play-again h2");
 		let playAgain=document.querySelector(".play-again button");
 		finalResult1.classList.add("fadeout");
 		gameVanish.classList.remove("fadein");
 		afterWin.classList.add("fadein");
 		winnerScore.textContent=`${pName} = ${pScore} \u00A0\u00A0\u00A0 Computer = ${cScore}`;
 		winnerName.textContent=`Oooppss! Computer is the Winner !`;
 		pScore=0;
 		cScore=0;
 		playAgain.addEventListener("click",function(){
 			finalResult1.classList.remove("fadeout");
 			gameVanish.classList.add("fadein");
 			afterWin.classList.remove("fadein");
 		});
 		
 	}
 }
//all function calling
scoreSee();
playMatch();


};
gameStart();
