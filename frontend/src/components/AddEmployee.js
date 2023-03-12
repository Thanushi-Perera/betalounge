import React, { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

//controllers
import { AddEmployee } from "../controllers/employee";
import { reactbaseURL } from "../config";

export default function AddEmployees() {
  const [fullName, setFullName] = useState("");
  const [nameWithInitials, setNameWithInitials] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [personalNote, setPersonalNote] = useState("");

  function handleSubmit() {
    if (
      fullName === "" &&
      nameWithInitials === "" &&
      dateOfBirth === "" &&
      email === "" &&
      phoneNumber === "" &&
      designation === "" &&
      employeeType === "" &&
      joinedDate === "" &&
      experience === "" &&
      salary === "" &&
      personalNote === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });
    } else if (fullName === "" || fullName === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid name!",
      });
    } else if (nameWithInitials === "" || nameWithInitials === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid name with initials!",
      });
    } else if (preferredName === "" || preferredName === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid preferred name Or Display Name!",
      });
    } else if (gender === "" || gender === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a Gender!",
      });
    } else if (dateOfBirth === "" || dateOfBirth === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a Date of Birth!",
      });
    } else if (email === "" || email === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email!",
      });
    } else if (phoneNumber === "" || phoneNumber === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid phone number!",
      });
    } else if (designation === "" || designation === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid designation!",
      });
    } else if (employeeType === "" || employeeType === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid employee type!",
      });
    } else if (joinedDate === "" || joinedDate === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid joined date!",
      });
    } else if (experience === "" || experience === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid experience!",
      });
    } else if (salary === "" || salary === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid salary!",
      });
    } else if (personalNote === "" || personalNote === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid personal note!",
      });
    } else {
        const newEmployee = {
        FullName: fullName,
        NameIntials: nameWithInitials,
        PrefferedName: preferredName,
        Gender: gender,
        DOB: dateOfBirth,
        Email: email,
        MobileNumber: phoneNumber,
        Designation: designation,
        EmployeeType: employeeType,
        JoinedDate: joinedDate,
        Experience: experience,
        Salary: salary,
        PersonalNotes: personalNote,
      };
      AddEmployee(newEmployee);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Employee is Added Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.replace(reactbaseURL + "/");
      }, 1000);
    }
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
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add People</h3>
                  <h5>x</h5>
                  <form>
                    {/* Full Name */}
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="FullName">
                            Full Name*
                          </label>
                          <input
                            type="text"
                            id="FullName"
                            className="form-control form-control-lg"
                            onChange={(e) => setFullName(e.target.value)}
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
                          <input
                            type="text"
                            id="NameWithInitials"
                            className="form-control form-control-lg"
                            onChange={(e) =>
                              setNameWithInitials(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      {/* Display Name */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="prefferedName">
                            Preffered/Display Name
                          </label>
                          <input
                            type="text"
                            id="prefferedName"
                            className="form-control form-control-lg"
                            onChange={(e) => setPreferredName(e.target.value)}
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
                            options={[
                              { value: "Male", label: "Male" },
                              { value: "Female", label: "Female" },
                            ]}
                            onChange={(e) => {
                              setGender(e.value);
                            }}
                          />
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="DOB">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            id="DOB"
                            className="form-control form-control-lg"
                            onChange={(e) => setDateOfBirth(e.target.value)}
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
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Phone number */}
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="phoneNumber">
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                          <input
                            type="text"
                            id="designation"
                            className="form-control form-control-lg"
                            onChange={(e) => setDesignation(e.target.value)}
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
                            options={[
                              { value: "Full Time", label: "Full Time" },
                              { value: "Part Time", label: "Part Time" },
                              {
                                value: "Contract Basis",
                                label: "Contract Basis",
                              },
                              { value: "Other", label: "Other" },
                            ]}
                            onChange={(e) => {
                              setEmployeeType(e.value);
                            }}
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
                          <input
                            type="date"
                            id="joinedDate"
                            className="form-control form-control-lg"
                            onChange={(e) => setJoinedDate(e.target.value)}
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
                            options={[
                              { value: "01 Year", label: "01 Year" },
                              { value: "02 Years", label: "02 Years" },
                              { value: "03 Years", label: "03 Years" },
                              { value: "04 Years", label: "04 Years" },
                              { value: "05 Years", label: "05 Years" },
                              { value: "06 Years", label: "06 Years" },
                              { value: "07 Years", label: "07 Years" },
                              { value: "08 Years", label: "08 Years" },
                              { value: "09 Years", label: "09 Years" },
                            ]}
                            onChange={(e) => {
                              setExperience(e.value);
                            }}
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
                          <input
                            type="text"
                            id="salary"
                            className="form-control form-control-lg"
                            onChange={(e) => setSalary(e.target.value)}
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
                          <input
                            type="text"
                            id="personalnotes"
                            className="form-control form-control-lg"
                            onChange={(e) => setPersonalNote(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="mt-4 pt-2">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
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
