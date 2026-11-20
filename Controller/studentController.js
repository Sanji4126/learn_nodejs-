const listStudent = require("../Models/studentModel");

// CREATE FUNCTION
const getStudent = (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Student Get Successfully!",
    data: listStudent,
  });
};
const getStudentById = (req, res) => {
  const id = Number(req.params.id);
  //status code = 400 bad request
  //status code = 404 not found
  //status code = 200 GET ID success
  if (!Number.isInteger(id) || id < 0) {
    return res.status(400).json({
      message: "USER ID MUST BE INTEGER",
      status: 400,
    });
  }
  const findStudent = listStudent.find((s) => s.student_id === id);
  if (!findStudent) {
    return res.status(404).json({
      status: 404,
      message: "STUDENT NOT FOUND",
    });
  }
  return res.status(200).json({
    status: 200,
    message: "STUDENT GET SUCCESSFULL",
    data: findStudent,
  });
};

const createStudent = (req, res) => {
  const { student_name, gender, age, subject, payment } = req.body;

  const newStudent = {
    student_id: listStudent.length + 1,
    student_name,
    gender,
    age,
    payment,
    subject,
  };

  listStudent.push(newStudent);

  return res.status(201).json({
    status: 201,
    message: "Student added successfully",
    data: newStudent,
  });
};

module.exports = {
  getStudent,
  createStudent,
  getStudentById,
};
