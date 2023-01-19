const net = require("net");
const { IP, PORT } = require('./constants')

const connect = function () {
  const conn = net.createConnection({
    IP, 
    PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('connecting Estalbished')

    conn.write('Name: JR')

  })
  conn.on('data', message => {
    console.log(message)
  })
  return conn;
};

module.exports = { connect }