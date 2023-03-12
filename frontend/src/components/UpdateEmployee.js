import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { reactbaseURL } from "../config";
import Swal from "sweetalert2";
import Select from "react-select";

import { updateEmployee, getSelectedEmployee } from "../controllers/employee";
import FormInput from "./FormInput";
import FormInputDate from "./FormInputDate";

export default function UpdateEmployee(props) {
  const { id } = useParams();

  const employeeGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const employeeType = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract Basis", label: "Contract Basis" },
    { value: "Other", label: "Other" },
  ];
  const employeeExperience = [
    { value: "01 Years", label: "01 Years" },
    { value: "02 Years", label: "02 Years" },
    { value: "03 Years", label: "03 Years" },
    { value: "04 Years", label: "04 Years" },
    { value: "05 Years", label: "05 Years" },
    { value: "06 Years", label: "06 Years" },
    { value: "07 Years", label: "07 Years" },
    { value: "08 Years", label: "08 Years" },
    { value: "09 Years", label: "09 Years" },
  ];

  const [employee, setEmployee] = useState([]);
  const [gender, setGender] = useState({});
  const [type, setType] = useState({});
  const [experience, setExperience] = useState({});
  const [fullName, setFullName] = useState(employee.fullName);
  const [nameWithInitials, setNameWithInitials] = useState(
    employee.nameWithInitials
  );
  const [displayName, setDisplayName] = useState(employee.displayName);
  const [dateOfBirth, setDateOfBirth] = useState(employee.dateOfBirth);
  const [email, setEmail] = useState(employee.email);
  const [mobile, setMobile] = useState(employee.mobile);
  const [designation, setDesignation] = useState(employee.designation);
  const [joinDate, setJoinDate] = useState(employee.joinDate);
  const [salary, setSalary] = useState(employee.salary);
  const [personalNotes, setPersonalNotes] = useState(employee.personalNotes);

  useEffect(() => {
    getSelectedEmployee(id).then((res) => {
      setEmployee(res);
      setGender({ label: res.Gender, value: res.Gender });
      setType({ label: res.EmployeeType, value: res.EmployeeType });
      setExperience({ label: res.Experience, value: res.Experience });
    });
  }, []);

  console.log(employee);

  const setFullNameHandler = (data) => {
    setFullName(data);
  };
  const setNameWithInitialsHandler = (data) => {
    setNameWithInitials(data);
  };
  const setDisplayNameHandler = (data) => {
    setDisplayName(data);
  };
  const setDOBHandler = (data) => {
    setDateOfBirth(data);
  };
  const setEmailHandler = (data) => {
    setEmail(data);
  };
  const setMobileNumberHandler = (data) => {
    setMobile(data);
  };
  const setDesignationHandler = (data) => {
    setDesignation(data);
  };
  const setJoinDateHandler = (data) => {
    setJoinDate(data);
  };
  const setSalaryHandler = (data) => {
    setSalary(data);
  };
  const setPersonalNotesHandler = (data) => {
    setPersonalNotes(data);
  };

  function handleSubmit(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to change Employee details!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((res) => {
      if (res.value === true) {
        updateEmployee({
          _id: id,
          FullName: fullName,
          NameIntials: nameWithInitials,
          PrefferedName: displayName,
          Gender: gender.label,
          DOB: dateOfBirth,
          Email: email,
          MobileNumber: mobile,
          Designation: designation,
          EmployeeType: type.label,
          JoinedDate: joinDate,
          Experience: experience.label,
          Salary: salary,
          PersonalNotes: personalNotes,
        }).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Employee details updated successfully!",
              icon: "success",
              confirmButtonText: "Ok",
            });
            setTimeout(() => {
              window.location.replace(reactbaseURL + "/");
            }, 2050);
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong!",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        });
      }
    });
  }

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                // style="border-radius: 15px;"
              >
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex justify-content-between">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update People</h3>
                    <Link to={"/"}>
                      <h5>x</h5>
                    </Link>
                  </div>
                  <form>
                    {/* Full Name */}
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="FullName">
                            Full Name*
                          </label>
                          <FormInput
                            value={employee.FullName}
                            title="Full Name"
                            onSetValue={setFullNameHandler}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name with Initials */}
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="NameWithInitials"
                          >
                            Name With Initials*
                          </label>
                          <FormInput
                            value={employee.NameIntials}
                            title="Name with initials"
                            onSetValue={setNameWithInitialsHandler}
                          />
                        </div>
                      </div>

                      {/* Display Name */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="prefferedName">
                            Preffered/Display Name
                          </label>
                          <FormInput
                            value={employee.PrefferedName}
                            title="Display Name"
                            onSave={setDisplayNameHandler}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="gender">
                            Gender
                          </label>
                          <Select
                            options={employeeGender}
                            hideSelectedOptions={false}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            value={gender}
                            onChange={(e) => setGender(e)}
                          />
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="DOB">
                            Date of Birth
                          </label>
                          <FormInputDate
                            value={employee.DOB}
                            title="Date of Birth"
                            onSave={setDOBHandler}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                          <FormInput
                            value={employee.Email}
                            title="Email"
                            onSave={setEmailHandler}
                          />
                        </div>
                      </div>

                      {/* Phone number */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="phoneNumber">
                            Mobile Number
                          </label>
                          <FormInput
                            value={employee.MobileNumber}
                            title="Email"
                            onSave={setMobileNumberHandler}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Designation */}
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="designation">
                            Designation
                          </label>
                          <FormInput
                            value={employee.Designation}
                            title="designation"
                            onSave={setDesignationHandler}
                          />
                        </div>
                      </div>

                      {/* Employee Type */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="EmployeeType">
                            Employee Type
                          </label>
                          <Select
                            options={employeeType}
                            hideSelectedOptions={false}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            value={type}
                            onChange={(e) => setType(e)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Joined Date */}
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="joinedDate">
                            Joined Date
                          </label>
                          <FormInputDate
                            value={employee.JoinedDate}
                            title="Date of Birth"
                            onSave={setJoinDateHandler}
                          />
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="Experience">
                            Experience
                          </label>
                          <Select
                            options={employeeExperience}
                            hideSelectedOptions={false}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            value={experience}
                            onChange={(e) => setExperience(e)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Salary */}
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="salary">
                            Salary
                          </label>
                          <FormInput
                            value={employee.Salary}
                            title="Email"
                            onSave={setSalaryHandler}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Personal Notes */}
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="personalnotes">
                            Personal Notes
                          </label>
                          <FormInput
                            value={employee.PersonalNotes}
                            title="Email"
                            onSave={setPersonalNotesHandler}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="d-flex justify-content-end">
                      <Link to={"/"}>
                        <h5 className="p-2">Cancel</h5>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleSubmit(id)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
