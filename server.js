var datas = require('./db.json');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get',(req, res) => {
    res.send(datas)
})
app.post('/api/user', (req, res) => {
    var result = datas.user.find(obj => {
        return obj.email === req.body.email && obj.pass === req.body.password
    })
    if (result == undefined) {
        res.send("sorry")
    } else { res.send(result)}
});


app.listen(port, () => console.log(`Listening on port ${port}`));