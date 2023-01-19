const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',  // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('connecting Estalbished')

    conn.write('Name: JR')
  })

  return conn;
};

module.exports = { connect }