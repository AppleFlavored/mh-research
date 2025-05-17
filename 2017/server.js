const express = require('express');
const apiRouter = require('./api');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static'), { redirect: true }));
app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3030, () => {
    console.log('Listening on port 3030.');
});