const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

app.use('/static', express.static('./static/'));

// app.use((req, res, next) => {
//   res.header('Access-Control_Allow-Origin', '*')
//   res.header('Access-Conrol-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

const doraemon = {
  'doraemon': {
    'name': 'Doraemon',
    'age': 11,
    'species': 'Robot cat',
    'favorite food': 'Dorayaki',
  },
  'nobita': {
    'name': 'Nobi Nobita',
    'age': 10,
    'species': 'Human',
    'favorite food': 'Sashimi and Mochi',
  },
  'dorami': {
    'name': 'Dorami',
    'age': 8,
    'species': 'Robot cat',
    'favorite food': 'Melon pan',
  },

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:characterName', (req, res) => {
  const charactersName = req.params.characterName.toLowerCase();
  if (doraemon[charactersName]) {
    res.json(doraemon[charactersName]);
  } else {
    res.json(doraemon['dorami']);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}!`);
});