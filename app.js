
let fs = require('fs');
let express = require('express');

let app = express();

let useRoutes = require('./routes/routes');

app.use(express.json());

/* app.post('/api/', (req, res) => {
  console.log(req.body);
  const data = Object.assign(req.body, {"msg":"Hello World"});
  res
    .status(200)
    .send(data);
} ) */

app.use('/data', useRoutes);

const port = 3000;
app.listen(port, () => {
 console.log(`Running on ${port} port....`)
});

