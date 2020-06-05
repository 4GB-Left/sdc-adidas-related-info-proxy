const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PROXY_PORT || 3000;

app.use(express.static('./public'));

app.get('/looks/:id', (req, res) => {
  axios.get(`http://52.53.187.183:5000/looks/${req.params.id}`)
  .then(({data}) => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(500).send(err)
  })
});

app.get('/relatedProduct/:id', (req, res) => {
  axios.get(`http://52.53.187.183:5000/relatedProduct/${req.params.id}`)
  .then(({data}) => {
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(500).send(err)
  })
});

app.listen(PORT, () => console.log(`proxy server is listening on port: http://localhost:${PORT}`));