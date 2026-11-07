const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const studentRoute=require("./Routes/studentRoute");
app.use('/student',studentRoute);

// Access ROOT PROJECT 
app.get("/",(req,res)=>{
    res.send("NodeJS is starting........");
});

// Startup Server nodeJS 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
