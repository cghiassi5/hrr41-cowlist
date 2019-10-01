const Promise = require ('bluebird');

module.exports = (db) => {
  if(!db.queryAsync){
    db = Promise.promisifyAll(db);
  }
  return db.queryAsync(`
  CREATE TABLE IF NOT EXISTS cows(
    id INT NOT NULL AUTO_INCREMENT PRIMAR KEY,
    name VARCHAR(20),
    description VARCHAR(255),
  );`)
  .error(err => {
    console.log(err)
  })
}