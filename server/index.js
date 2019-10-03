const app = require('./app.js');
const db = require('./db');
const port = 8080;

app.listen(port, () => {
  console.log(`Cows is listening on ${port}`);
});