const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render(__dirname + "/views/index")
});
app.get('/rockpaperscissors', (req, res) => {
  res.render(__dirname + "/views/rockPaperScissors")
});
app.get('/tictactoe', (req, res) => {
  res.render(__dirname + "/views/ticTacToe")
});
app.get('/blackjack', (req, res) => {
  res.render(__dirname + "/views/blackjack")
});
app.get('/simonsays', (req, res) => {
  res.render(__dirname + "/views/simonSays")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});