const db = require('../db');
const _ = require('lodash');

const executeQuery = (query, values) => {
  return db.queryAscynd(query,values).spread(results => results);
};
const parseData = options => {
  return _.reduce(options, (parsed, value, key) => {
  parsed.string.push(`${key} =?`);
  parsed.values.push(value);
  return parsed;
  }, {string: [], values: []});
};

class Model{
  constructor(tablename){
    this.tablename = tablename;
  }
  get(options) {
    let parsedOptions = parseData(options);
    let queryString = `SELECT * FROM ${this.tablename} WHERE ${parsedOptions.string.join(' AND ')} LIMIT 1`;
    return executeQuery(queryString, parsedOptions.values).then(result => results[0]);
  }
  create(options){
    let queryString =  `INSERT INTO ${this.tablename}`;
    return executeQuery(queryString,options);
  }
  getAll(options) {
    let queryString = `SELECT name FROM ${this.table}`
  }

}