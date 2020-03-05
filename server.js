const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const log = console.log;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>  res.render('index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => log(`sever listing on: https://localhost:${PORT}`));
