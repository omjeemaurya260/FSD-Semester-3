const express = require('express');
const app = express();

//student data
let student= [
    {id:1, name: "om",branch:"cse",age:20},
    {id:2, name: "ram",branch:"it",age:21},
    {id:3, name: "shyam",branch:"mech",age:21}
];

//get route
app.get('/students',(req,res)=>{
    res.json(student);
});

app.get('/students/:id',(req,res)=>{
    const id = Number(req.params.id);
    const student= student.fnd(s => s.id ===id);
    if(!student) return res.student(404).json({message:'Student not found'});
    res.json(student);
});

//Start server
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
