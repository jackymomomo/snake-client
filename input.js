// setup interface to handle user input from stdin

const setupInput = function () {
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
  })
}

handleUserInput();
setupInput();

