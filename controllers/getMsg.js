 const fs = require('fs')

/*const express = require('express');

const app = express();

app.use(express.json()); */

let data = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));

// let msg = "Hello World";

exports.getRequest =  (req, res) =>{

    //console.log(req.body.id);
    const id = req.params.id;

    console.log(id);
  
    const newdata = data.find(el => el.id === id);
  
    res.status(200).send(newdata);
    };

    /* let data = req.body.id;
    res
    .status(200)
    .send(req.body); */
  


