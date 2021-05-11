const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//console.log(path.join(__dirname,'public'))
const PATH = path.join(__dirname,'public');
app.use(express.static(PATH));

app.get('/',(req,res)=>{
    res.send('node is running')
})

app.listen(port,()=>{
    console.log(`Listening on port,${port}`)
});