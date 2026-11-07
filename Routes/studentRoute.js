const express = require("express");
const router = express.Router();

const {getStudent}=
require("../Controller/studentController");

//USING METHOD GET + STATUS 200
router.get('/', getStudent);

module.exports=router;
