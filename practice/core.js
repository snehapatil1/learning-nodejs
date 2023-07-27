// import path and util module
const path = require("path");
const util = require("util");

// add 3 more directories inside current file directory
const newDirectory = path.join(
	__dirname,
	"dir1",
	"dir2",
	"dir3"
);

console.log(newDirectory);

// print additional details
util.log(newDirectory);
util.log(path.basename(__filename));
