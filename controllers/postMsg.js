const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));

exports.postRequest = (req, res) => {

        

        //console.log(req.body)
        
        const newId = data[data.length -1 ].id + 1;
        const newTour = Object.assign({id : newId}, req.body);
    
        data.push(newTour);
        fs.writeFile(`${__dirname}/../data/data.json`, JSON.stringify(data), err => {
            res.status(201).json({
                    data : newTour
            });
        }
    
        );
    

   /*  /* let data = data.le

    console.log(req.body); 

    res.status(200).send(req.body); */

}