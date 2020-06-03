const path = require('path');


const courses = [];

exports.getCourseController =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'courses.html'));   
};

