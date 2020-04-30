/**
 * Created by iSmile on 1/21/2020.
 */

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(3001, () => console.log('Server started !!!'));

