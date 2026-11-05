const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


//javascript object
const listStudent=[
    {
        student_id: 1 ,
        student_name : "KHORN PILA",
        male: "Male",
        payment : 780
    },
    {
        student_id: 2,
        student_name : "OUSA",
        male: "Female",
        payment : 900
    },
    {
        student_id: 3,
        student_name : "LIKA",
        male: "Female",
        payment : 1090
    }
];

//Access ROOT PROJECT 
app.get("/",(req,res)=>{
    res.send("NodeJS is starting........")
})

app.get("/student",(req,res)=>{
    res.status(200).json({
        status:200,
        message: "Student Get SuccessFully",
        data: listStudent
    });
});

// Startup Server nodeJS 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
