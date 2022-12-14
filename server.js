const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

const doraemon = {
  'doraemon': {
    'age': 11,
    'species': 'Robot cat',
    'favorite food': 'Dorayaki',
  },
  'nobita': {
    'age': 10,
    'species': 'Human',
    'favorite food': 'Sashimi and Mochi',
  },
  'dorami': {
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