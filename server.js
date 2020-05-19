const express = require('express');
const app = express();
const PORT = process.env.PROXY_PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT);