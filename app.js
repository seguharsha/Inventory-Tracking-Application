const fs=require('fs');
const express=require('express');
const app=express();
const routes=require('./routes/items');
const bodyParser=require('body-parser');
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(routes);
const port=8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
