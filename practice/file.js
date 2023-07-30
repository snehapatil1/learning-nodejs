const fs = require("fs");

// synchronous reading
let files = fs.readdirSync("./");

console.log("reading files... 1");
console.log(`1 --- ${files}`);
console.log("reading files... 2");

// OR

// asynchronous reading
console.log("reading files... 3");
fs.readdir("./", function (err, files) {
	if (err) {
		throw err;
	}
	console.log(`2 --- ${files}`);
});
console.log("reading files... 4");
