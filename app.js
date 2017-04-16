//STATE
let state = [
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
	}
];

//STATE MOD FUNCTIONS
let nextQuestion = function(state, question) {
	let currentQuestion 
};

let validateQuestion = function() {};

let restart = function() {};

//RENDER FUNCTIONS
let showQuestion = function(state, element) {
	let questionHtml = `<h1>${state.question}</h1>`
	let choices = `<ul>${state.choices.map(choice => '<li>' + choice + '</li>')}</ul>`;
	let nextButton = `<button>Next</button>`;
	let quizHtml = questionHtml + choices + nextButton;
	return element.html(quizHtml);
};


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