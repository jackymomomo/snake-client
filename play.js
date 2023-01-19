const net = require("net");
const { stdin } = require("process");
const { connect } = require('./client')
// establishes a connection with the game server

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = (key) => {
  stdin.on('data', handleUserInput)
  if (key === '\u0003') {
    process.exit();
  }
}

console.log("Connecting ...");

const connectionVariable = connect()
setupInput(connectionVariable)
