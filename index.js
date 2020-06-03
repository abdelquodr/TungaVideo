const express = require('express');
const path = require('path');

const home = require('./router/home');
const courses = require('./router/courses');

const app = express();

// app.set('view-engine', 'ejs');
// app.set('view', 'view');

app.use( home );
app.use( courses );
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});