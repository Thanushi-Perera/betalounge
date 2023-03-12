import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    EmployeeID: {type: String, required: true},
    FullName: {type: String, required: true},
    NameIntials: {type: String, required: true},
    PrefferedName: {type: String, required: true},
    Gender: {type: String, required: true},
    DOB: {type: String, required: true},
    Email: {type: String, required: true},
    MobileNumber: {type: String, required: true},
    Designation: {type: String, required: true},
    EmployeeType: {type: String, required: true},
    JoinedDate: {type: String, required: true},
    Experience: {type: String, required: true},
    Salary: {type: String, required: true},
    PersonalNotes: {type: String, required: true},
});

export const Employee = mongoose.model("Employee", employeeSchema);