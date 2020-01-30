const log = require("./logger");

log("message");

//path module

const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);

//os module

const os = require("os");

var totalMem = os.totalmem();
var freeMem = os.freemem();

//console.log('Total Memory: ' + totalMem);
//template string
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);

//file system module
const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", function(err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

//events module
const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messagelogged", arg => {
  console.log("Listener called", arg);
});
logger.log("message");
