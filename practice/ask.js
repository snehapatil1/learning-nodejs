const readline = require("readline");

const rl = readline.Interface({
	input: process.stdin,
	output: process.stdout
});

const questions = [
	"What is your name?",
	"What do you like doing?",
	"How do you find Node.js?"
];

const answers = [];

function collectAnswers(questions, done) {
	const questionAnswered = (answer) => {
		answers.push(answer.toString().trim());
		if (answers.length < questions.length) {
			rl.question(questions[answers.length], questionAnswered);
		} else {
			return done(answers);
		}
	};
	rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, () => {
	console.log("\nThank you for answering!");
	console.log(answers);
	process.exit();
});
