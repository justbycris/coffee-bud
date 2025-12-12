import express from 'express';
import bodyParser from 'body-parser';  
import data from './test.json' with {type: 'json'}; 

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }));


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is running on port ${PORT}!!!`)
    } else {
        console.log(`Error occured: ${error}`)
    }
})

app.get('/', (req, res) => {
  res.send('WOOO WOOO!')
})

app.get('/coffee-shops', function (req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data))

})


