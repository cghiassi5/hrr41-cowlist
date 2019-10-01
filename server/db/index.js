const mysql = require('mysql');
const crateTables = require('./config');
const Promise = require('bluebird');
const database = 'cowlist';

const connection = mysql.createConnection({
  user: root,
  database: database
});

const db = Promise.promisifyAll(connection, {multiArgs: true});

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));


module.exports = db;