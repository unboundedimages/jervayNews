const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const path = require("path");
const axios = require('axios');
const port = 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static('public'))
// app.use(express.static(__dirname + '/build'));

const someFile = {
  Ho: "Ho",
  Hoes: "hoes",
  HOO:  "HOO"
}

const WSJ = 'https://newsapi.org/v2/everything?domains=wsj.com&sortBy=publishedAt&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'
app.get("/wsj", (req, res) => {
  axios.get(WSJ)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    });  

  // res.send("ping-pong");
})

//Business
const business = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'; 
app.get('/businesss', (req, res) => {
  axios.get(business)
  .then(response => {
    // console.log(response.data);
    res.send(response.data);
  })
})



app.get('/', function (req, res) {
 
    console.log("pingpong");
    //   res.sendFile(path.join(__dirname, 'build'));
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // res.send("ping-pong");
      })

// app.get('/', (req, res) => res.send('Hello Everyone'));

app.listen(port, () => console.log(`This mofo working or what at http://localhost:${port}`));
