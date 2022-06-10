/* const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

app.put('/api/', (req,res) => { 

    console.log(req.params);

    res.status(200).send({"id" : "1" , "msg" : "Hello World"});
});
app.listen(3000, () => {
    console.log("Running....");
}) */
const fs = require('fs');
const res = require("express/lib/response");

// let msg = "Welcome";
//let data = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));
let jsonDataFile = `${__dirname}/../data/data.json`;

exports.putRequest = (req, res) => {

        
        let readData = getJsonData();
        
        //console.log(readData);

        let greetingId = req.params.id;
        
        readData.forEach((greeting, index) => {
            
            if(greetingId === greeting.id)
            {
                //console.log(greeting.msg, index);
                readData[index].msg = req.body.msg;
                fs.writeFile(`${__dirname}/../data/data.json`, JSON.stringify(readData), err => {
                    if(err) { return(res.send("Error Occured"))};
                    res.send("Updated successfully");
                });
            }
            else{
                res.send("Id not found!");
            }
        
        
        });

        

};

function getJsonData()
{
    let  jsonData = fs.readFileSync(jsonDataFile, "utf-8");
    return JSON.parse(jsonData);

}