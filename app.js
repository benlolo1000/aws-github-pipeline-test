const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send("welcome to homepage");

})

app.listen(3000, () => {
    console.log('Listerning on 3000')
});