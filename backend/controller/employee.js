import {Employee} from "../models/employee.js";
import { IDGenerator} from "../models/IDGenerator.js";

export const addEmployee = async (req, res) => {
    try{
        const Eid = await IDGenerator.findOneAndUpdate(
            {id: "autoval"}, 
            {$inc: {index: 1}},
            {new: true, upsert: true}
            );

    const employee = new Employee({
        EmployeeID: Eid.index,
        FullName: req.body.FullName,
        NameIntials: req.body.NameIntials,
        PrefferedName: req.body.PrefferedName,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        Email: req.body.Email,
        MobileNumber: req.body.MobileNumber,
        Designation: req.body.Designation,
        EmployeeType: req.body.EmployeeType,
        JoinedDate: req.body.JoinedDate,
        Experience: req.body.Experience,
        Salary: req.body.Salary,
        PersonalNotes: req.body.PersonalNotes,
    });

    const details = await employee.save();

    res.send({
        status: 200,
        details: details,
    });
    }catch(err){
        res.send({
            status: 500,
            message: "Error Occured",
        });
    }
};

export const getEmployee = async (req, res) => {
    let {page, limit,selectedType} = req.query;
    let filter = {};
    if (selectedType !== "null"){
        filter.eType = selectedType;
    }
    if (!page){
        page = 1;
    }
    if (!limit){
        limit = 5;
    }
    const size = parseInt(limit);
    const skip = (page - 1) * size;
    const employees = await Employee.find(filter).skip(skip).limit(size);
    res.send(employees);
};

export const getSelectedEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

export const updateEmployee = async (req, res) => {
    try{
        const employee = await Employee.findOneAndUpdate(
            {
                _id: req.body.id
            },
            {
                _id: req.body.id,
                FullName: req.body.FullName,
                NameIntials: req.body.NameIntials,
                PrefferedName: req.body.PrefferedName,
                Gender: req.body.Gender,
                DOB: req.body.DOB,
                Email: req.body.Email,
                MobileNumber: req.body.MobileNumber,
                Designation: req.body.Designation,
                EmployeeType: req.body.EmployeeType,
                JoinedDate: req.body.JoinedDate,
                Experience: req.body.Experience,
                Salary: req.body.Salary,
                PersonalNotes: req.body.PersonalNotes,
            },
            {
                new: true,
            }
        );
    
        if (employee){
            res.send({
                status: 200,
                employee: employee,
            });
        }else {
            res.send({
                status: 500,
                employee: employee,
            });
        }
    } catch (err){
       console.log(err.message);
        }
    };
    
export const deleteEmployee = async (req,res) => {
    const employee = await Employee.findByIdAndDelete(req.body.id);
    res.send(employee);
};