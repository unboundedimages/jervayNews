const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const axios = require('axios');
const PORT = (8082 || 9000);
const trump = 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'; 


const cors = require("cors");


app.use(express.static('build'))
app.use(cors());
// app.disable('etag');

app.use(bodyParser.urlencoded({extended: true}));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "jervay.agency")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next();
// })

// app.use(express.static(path.join(__dirname, 'build')));
// app.use('/', express.static(path.join(__dirname, 'view'))) 
// app.use('/', express.static(path.join(__dirname, 'public'))) 
//app.use(cors());

//  app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname,'build','index.html'));
// 	 //res.sendFile(path.join(__dirname, 'public', 'index.html'));
//  })

app.get("/pingo", function(req, res) {
  console.log("pingpong");
  res.send("ping-pong");
});


const WSJ = 'https://newsapi.org/v2/everything?domains=wsj.com&sortBy=publishedAt&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'
app.get("/wsj", (req, res) => {
  axios.get(WSJ)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    });  

})

//Business
const business = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'; 
app.get('/businesss', (req, res) => {
  axios.get(business)
  .then(response => {
    // console.log(response.data);
    res.send(response.data);
  })
} )

//technology
const technology = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
app.get("/techNo", (req,res) => {
  axios.get(technology)
  .then(response => {
    console.log(response.data);
    res.send(response.data);
  } )  
})

//Politics
const politics = 'https://newsapi.org/v2/everything?q=politics&sortBy=publishedAt&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
app.get('/politicss', (req, res) => {
  axios.get(politics)
    .then(response => {
      res.send(response.data)
    })
})

//Law
const law = 'https://newsapi.org/v2/everything?q=North Carolina Law&sortBy=publishedAt&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
// const Law = 'https://newsapi.org/v2/top-headlines?q=north carolina&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
app.get('/law_', (req, res) => {
  axios.get(law)
    .then(response => {
      res.send(response.data)
    })
})

//African-American History
const history = 'https://newsapi.org/v2/everything?q=black%20history&sortBy=publishedAt&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
app.get('/history_', (req, res) => {
  axios.get(history)
    .then(response => {
      res.send(response.data)
    })
})

const hbcu = 'https://newsapi.org/v2/everything?q=african%20american%20hbcu&sortBy=publishedAt&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
app.get('/hbcus', (req, res) => {
  axios.get(hbcu)
    .then(response => {
      res.send(response.data);
  })
})

//Automotive
const Automotive = 'https://newsapi.org/v2/everything?q=Automotive&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
app.get('/Auto', (req, res) => {
  axios.get(Automotive)
    .then(response => {
      res.send(response.data)
    })
})


const Agriculture = 'https://newsapi.org/v2/everything?q=North Carolina Agriculture&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';
app.get('/Aggie', (req, res) => {
  axios.get(Agriculture)
    .then(response => {
      res.send(response.data)
    })
})

app.get("/newscan", function (req, res) {
  //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
    
 
// axios.get('https://api.ipify.org/?format=json')
// .then(response => {
//   console.log(response.data.ip)
//   theIpIs = response.data.ip
//   console.log('This is : ', theIpIs)
//   return theIpIs;
// })
// .catch(error => {
//   console.log(error);
// });
  

  //headlines
const TopHeadLines = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'; 




  //BBC
  const bbc = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';

  // const WSJ = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'

  //Trump
  // const trump = 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'; 


  const washingtonPost = 'https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey=d0a5e38aa92d4caaab03e07a91db49f2';

  const everythingWP = 'https://newsapi.org/v2/everything?domains=washingtonpost.com&apiKey=d0a5e38aa92d4caaab03e07a91db49f2'
  
  axios.get(TopHeadLines)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    } )  

/** How to use axios.all() */

//https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
  

});




app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build','index.html'));
    })

app.listen(PORT, function() {
  console.log(
    "==> 🌎   Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
