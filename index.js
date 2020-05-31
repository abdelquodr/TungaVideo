const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});