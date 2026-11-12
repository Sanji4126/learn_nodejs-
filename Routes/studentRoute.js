const express = require("express");
const router = express.Router();

const {getStudent,createStudent}=
require("../Controller/studentController");

//USING METHOD GET + STATUS 200
router.get('/', getStudent);
//USING METHOD POST + STATUS 201
router.post('/data',createStudent)

module.exports=router;
