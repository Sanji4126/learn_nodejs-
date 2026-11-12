const listStudent = require("../Models/studentModel");

// CREATE FUNCTION
const getStudent = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Student Get Successfully!",
        data: listStudent,
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
};