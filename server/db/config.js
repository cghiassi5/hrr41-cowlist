const Promise = require ('bluebird');

module.exports = (db) => {
  if(!db.queryAsync){
    db = Promise.promisifyAll(db);
  }
  return db.queryAsync(`
  CREATE TABLE IF NOT EXISTS cows (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
  );`)
  .error(err => {
    console.log(err)
  })
}