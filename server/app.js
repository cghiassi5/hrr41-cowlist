var express = require('express')
const app = express();

app.get('/', (req,res) => {
  res.send('hello world!')
});

app.get('/cows', (req,res)=>{
  res.send('cows page');
  //res.render('cows');
});

app.post('/cows', (req,res) => {
  var cowName = req.body.name;
  var cowDescription = req.body.description;
  var cowObject = {name: cowName, description: cowDescription};
  res.json(cowObject);
  return models.create(cowObject);
});

module.exports = app;