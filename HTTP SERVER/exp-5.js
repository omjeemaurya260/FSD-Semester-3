const express = require('express');
const app = express();

//student data
let student= [
    {id:1, name: "om",branch:"cse"},
    {id:2, name: "ram",branch:"it"},
    {id:3, name: "shyam",branch:"mech"}
];

//get route
app.get('/students',(req,res)=>{
    res.json(student);
});

//Start server
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});