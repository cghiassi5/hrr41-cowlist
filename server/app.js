var express = require('express');
const model = require('./models')
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req,res) => {
//   res.send('hello world!')
// });

app.get('/cows',
(req, res, next) => {
  model.Cow.getAll()
    .then(cows => {
      res.status(200).send(cows);
    })
    .error(error => {
      res.status(500).send(error);
    });
});

app.post('/cows', (req,res) => {
  console.log('cow Body!!!!', req.body.name)
  var cowName = req.body.name;
  var cowDescription = req.body.description;
  var cowObject = {name: cowName, description: cowDescription};
  res.json(cowObject);
  return model.Cow.create(cowObject);
});

module.exports = app;