const events = require("events")

const emitter = new events.EventEmitter()

emitter.on("customEvent", (user, message)=> {
	console.log(`${user}: ${message}\n`);
});

emitter.emit("customEvent", "Sneha", "Keep going!");
emitter.emit("customEvent", "Sneha", "Work hard!");

process.stdin.on("data", (data)=> {
	const input = data.toString().trim();
	if (input === "exit") {
		emitter.emit("customEvent", "terminal", "Goodbye!");
		process.exit();
	}
	emitter.emit("cutsomEvent", "Sneha", input);
});
