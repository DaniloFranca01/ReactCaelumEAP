const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static('static'));
app.get('*', (req, res) => res.sendFile(path.resolve('static', 'index.html')));
app.listen(port);

console.log("server started");