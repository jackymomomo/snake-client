// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

module.exports = { setupInput }

const handleUserInput = (key) => {
  process.stdin.on('data', (key) => {
    process.stdout.write('');
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up")
    }
    if (key === 'a') {
      connection.write("Move: left")
    }
    if (key === 's') {
      connection.write("Move: down")
    }
    if (key === 'd') {
      connection.write("Move: right")
    }
  })
}

// const MOVE_UP_KEY = 'w';
// const MOVE_LEFT_KEY = 'a';
// const MOVE_DOWN_KEY = 's';
// const MOVE_RIGHT_KEY = 'd';

handleUserInput();
setupInput();

