const path = require('path');

// const MailingList = require('../models/home');

exports.getHomeController =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
    // res.render('home', {
    //     pageTitle: 'home',
    //     path: '/',
    //     activeHome: true
    // });
};


// exports.PostHomeController = };