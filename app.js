//STATE
let state = {
	quiz: [
	{ question: 'What is my favorite color?',
	  choices: ['blue', 'green', 'red', 'purple'],
	  correctAnswer: 'blue'
	}, 
	{	question: 'What is my favorite number?',
	  choices: [1, 5, 7, 8],
	  correctAnswer: '8'
	},
	{ question: 'What is my favorite movie?',
	  choices: ['Apple Seed','Limitless', 'Split', 'Moana'],
	  correctAnswer: 'Limitless'
	}],
	score: 0,
	currentQuestion: 0,
	correctResponse: `Good Job you got it right` ,
	wrongResponse: `You got the answer wrong. The correct answer is `
];

//STATE MOD FUNCTIONS
let nextQuestion = function(state, question) {
	
};

let validateQuestion = function(state, question) {
	if(choices === correctAnswer) {
		state.score++;
		showResponse(state.correctResponse);
	} else {
		showResponse(state.wrongResponse);
	}
};

let restart = function(state) {
	state.score = 0;
	state.currentQuestion = 0;
};

//RENDER FUNCTIONS
let showQuestion = function(state, element) {
	let questionHtml = `<h1>${state.question}</h1>`
	let choices = `<ul>${state.choices.map(choice => '<li>' + choice + '</li>')}</ul>`;
	let nextButton = `<button>Next</button>`;
	let quizHtml = questionHtml + choices + nextButton;
	return element.html(quizHtml);
};

let showResponse = function(response) {
	let element = $('.response');
	return element.html(response);
}

//EVENT LISTENERS
$('#start').submit(function() {
	showQuestion();
});
 
$('#next').submit(function() {
	validateQuestion;
	nextQuestion;
});

$('#reset').submit(function() {
	restart();
});

$(function() {
	
});