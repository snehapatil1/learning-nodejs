let questions = [
	"What is your name?",
	"What do you like doing?",
	"What is your favourite programming language?"
];

let answers = [];

// print question
function ask(i = 0){
	process.stdout.write(`\n${questions[i]}`);
}

ask();

// call this function when data is entered
process.stdin.on("data", function (data){
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});

// call this function when exit function is called
process.on("exit", function () {
	process.stdout.write(`Go ${answers[1]} ${answers[0]}, you can do writing ${answers[2]} later!`);
});
