const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 3001;
const url = ('/api/reptiles');

//TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

//DATA

const data = require('./data');

//FUNCTIONS

app.get(url + '/:subgroup', (req, res) => {
    console.log(req.params);
    var subgroup = req.params.subgroup.toLowerCase();
    res.send(data[subgroup]);
})

app.get(url + '/:subgroup/:image', (req, res) => {
    console.log(req.params);
    var image = req.params.image.toLowerCase();
    res.send()
})

//LISTENING

app.listen(port, () => console.log('We are running on port ' + port))
