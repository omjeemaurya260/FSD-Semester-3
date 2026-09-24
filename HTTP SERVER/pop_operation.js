const express = require("express");
const app = express();

app.use(express.json());

// Existing student data
let students = [
    {
        id: 1,
        name: "Rahul",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Aman",
        branch: "IT"
    }
];

// Home route
app.get('/', (req, res) => {
    res.send("Student API is running");
});

// GET operation
// Show students to get data
app.get('/students', (req, res) => {
    res.json(students);
});

// POST operation
// Add new student data
app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
});

// DELETE route - Delete student by ID

app.delete('/students/:id', (req, res) =>{

const id = Number(req.params.id);

const student = students.find(s=>s.id === id);

if (!student) {

  return res.status(404).json({
    message:"student not found"


     });

}

students = students.filter(s=>s.id !== id);

res.json({

message: "Student deleted successfully",

student: student
});
});

// Start server
app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});