//questions
var question1 = new question({
	charName: "1. best-selling video games of all time?",
	answerOptions: ["Tetris", "Super Mario bros", "Minecraft", "GTAV"],
	answer: 0,
	pageNumber: "page-1"
});

var question2 = new question({
	charName: "2. What was the first console video game that allowed the game to be saved?",
	answerOptions: ["Contra", "Twisted Metal", "Golden Eye 007", "The Legend of Zelda"],
	answer: 3,
	pageNumber: "page-2"
});

var question3 = new question({
	charName: "3. God, who kills gods for living?",
	answerOptions: ["Kratos", "Raiden", "Amaterasu", "Zanza"],
	answer: 0,
	pageNumber: "page-3"
});

var question4 = new question({
	charName: "4.What is the name of the gang member that video game ‘Grand Theft Auto: San Andreas’ revolves around?",
	answerOptions: ["Mike Miller", "Dr.Drew", "Carl ‘CJ’ Johnson", "Nico Belli"],
	answer:2,
	pageNumber: "page-4"
});

var question5 = new question({
	charName: "5. NES was Short for....?",
	answerOptions: ["New ever Simulation", "Nintendo Entertainment System", "New Enterprise System", "Nothing else stop"],
	answer: 1,
	pageNumber: "page-5"
});

var question6 = new question({
	charName: "6. What Part of an Xbox 360 causes the Red Ring of Death ?",
	answerOptions: ["The lights", "Graphics Card", "The CDs", "Cables"],
	answer: 1,
	pageNumber: "page-6"
});

var question7 = new question({
	charName: "7. ‘Black Ops’ is the subtitle of which game?",
	answerOptions: ["Counter Stike", "Call of Duty", "BattleField", "Titan Fall"],
	answer: 1,
	pageNumber: "page-7"
});

var question8 = new question({
	charName: "8. What is Know as the Hardest Game of all Time?",
	answerOptions: ["Contra", "Ghosts and Goblins", "Ninja Gaiden", "Pokemon"],
	answer: 1,
	pageNumber: "page-8"
});

var question9 = new question({
	charName: "9. In the game ‘Mortal Kombat’, what phrase is heard when Scorpion uses his spear?",
	answerOptions: ["DIE!", "Get over here!", "Burn alive!", "get rekt!"],
	answer: 1,
	pageNumber: "page-9"
});

var question10 = new question({
	charName: "10. Green Clothed Hero in the Legend of Zelda series?",
	answerOptions: ["Kain", "Link", "Dante", "Zelda"],
	answer: 1,
	pageNumber: "page-10"
});


function question(option){
	this.charName = option.charName;
	this.answerOptions = option.answerOptions;
	this.answer = option.answer;
	this.pageNumber = option.pageNumber;
}

var genQuestion = function(x){
	var stage = $('#questions');
	stage.append('<div id="' + x.pageNumber + '" class="page"></div>');

	var questionsPage = $('#' + x.pageNumber);
	questionsPage.append('<h1>ONLY FOR REAL GAMERS</h1><hr/>');
	questionsPage.append('<p class="charName">' + x.charName + '</p>')
	questionsPage.append('<form>');
	questionsPage.append('<input type="radio" name="tv1" value="0" checked>' + x.answerOptions[0] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="1">' + x.answerOptions[1] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="2">' + x.answerOptions[2] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="3">' + x.answerOptions[3] + '<br/>');
	questionsPage.append('</form>');
	questionsPage.append('<button>next</button>');
}

//variables
var count = 0;
var nextPage = 1;

function showScore(){
	$('.score').append(count + " out of 10");
}

function checkAnswer(x){
	var finalAnswer = $('input:checked').val();
	if(nextPage == 10 && finalAnswer == x.answer){
		count++;
		$('#questions').hide();
		$('#finish').show();
		showScore();
	} else if(nextPage == 10){
		$('#questions').hide();
		$('#finish').show();
		showScore();
	} else if(finalAnswer == x.answer){
		count++;
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	} else {
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	}
}

//create questions
function newGame(){
	var create1 = new genQuestion(question1);
	var create2 = new genQuestion(question2);
	var create3 = new genQuestion(question3);
	var create4 = new genQuestion(question4);
	var create5 = new genQuestion(question5);
	var create6 = new genQuestion(question6);
	var create7 = new genQuestion(question7);
	var create8 = new genQuestion(question8);
	var create9 = new genQuestion(question9);
	var create10 = new genQuestion(question10);

}

function restart(){
	count = 0;
	nextPage = 1;
	$('#start-page').show();
	$('#page-1').hide();
	$('#page-2').hide();
	$('#page-3').hide();
	$('#page-4').hide();
	$('#page-5').hide();
	$('#page-6').hide();
	$('#page-7').hide();
	$('#page-8').hide();
	$('#page-9').hide();
	$('#page-10').hide();
	$('#finish').hide();
	$('#questions').show();
	$('.score').empty();
	$('#finish').hide();
}

$(document).ready(function(){
	// jQuery
	$('#start-page button').click(function(){
		$('#start-page').hide();
		$('#page-1').show();
		$('#page-2').hide();
		$('#page-3').hide();
		$('#page-4').hide();
		$('#page-5').hide();
		$('#page-6').hide();
		$('#page-7').hide();
		$('#page-8').hide();
		$('#page-9').hide();
		$('#page-10').hide();
		$('#finish').hide();
	});

	//generating the questions
	newGame();

	//button is click
	$('#page-1 button').click(function(){
		checkAnswer(question1);
	});

	$('#page-2 button').click(function(){
		checkAnswer(question2);
	});

	$('#page-3 button').click(function(){
		checkAnswer(question3);
	});

	$('#page-4 button').click(function(){
		checkAnswer(question4);
	});

	$('#page-5 button').click(function(){
		checkAnswer(question5);
	});

	$('#page-6 button').click(function(){
		checkAnswer(question5);
	});

	$('#page-7 button').click(function(){
		checkAnswer(question5);
	});

	$('#page-8 button').click(function(){
		checkAnswer(question5);
	});

	$('#page-9 button').click(function(){
		checkAnswer(question5);
	});

	$('#page-10 button').click(function(){
		checkAnswer(question5);
	});



	$('#finish button').click(function(){
		restart();
	});
});
