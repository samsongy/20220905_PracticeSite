const express = require('express');
const app = express();
const port = 8080;

const rps = require('./routes/rockPaperScissors');
const ttt = require('./routes/ticTacToe');
const bj = require('./routes/blackjack');
const ss = require('./routes/simonSays');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index')
});
app.use('/rockpaperscissors', rps);
app.use('/tictactoe', ttt);
app.use('/blackjack', bj);
app.use('/simonsays', ss);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});