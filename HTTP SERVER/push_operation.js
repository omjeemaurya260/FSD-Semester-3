const express =require('express');
const app = express();

app.use(express.json());

let students = [
    {id:1, name:"om", branch:"cse"},
    {id:2, name:"ram", branch:"it"},
];

app.get('/',(req,res)=>{
    res.send('server is running');
});

app.post('/students',(req,res)=>{
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({message:'Student added successfully',student:newStudent});
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});