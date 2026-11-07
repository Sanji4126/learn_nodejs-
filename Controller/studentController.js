const listproduct = require("../Models/studentModel");

//CREATE FUNCTION 
const getStudent=(req,res)=>{
    return res.status(200).json({
        status: 200,
        message: "Product Get Successfully !",
        data: listproduct,
    });
// const getById=(Resquest)=>{
    
// }

}
module.exports={
    getStudent,
    // getById,
}