const express = require('express');

const postmsg = require('../controllers/postMsg');

const getmsg = require('../controllers/getMsg');

const putmsg = require('../controllers/putMsg');

const router = express.Router();

//POST
router.post('/postMsg', postmsg.postRequest);

// GET 
router.get('/getMsg/:id', getmsg.getRequest);

// POST 
router.put('/updateMsg/:id', putmsg.putRequest);

module.exports = router;