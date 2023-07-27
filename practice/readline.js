const readline = require("readline");
const rl = readline.Interface({
	input: process.stdin,
	output: process.stdout
});

rl.question("How is Node.js?\n", answer => {
	console.log(`Your answer: ${answer}`);
	process.exit();
});
