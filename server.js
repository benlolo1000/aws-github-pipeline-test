const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send("welcome to homepage");

})

const port = process.env.PORT || process.env.port || 3000;

app.listen(port, () => {
    console.log('Listerning on 3000')
});