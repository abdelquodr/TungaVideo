const express = require('express');

const router = express.Router();

const homeController = require('../controller/homeController');

router.get('/home', homeController.getHomeController);

router.post('/', (req, res, next) => {
    console.log( req.body );  
    res.redirect('/'); 
});

module.exports = router;