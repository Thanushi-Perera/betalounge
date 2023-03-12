import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { getEmployee } from "../controllers/employee";

import { deleteEmployee } from "../controllers/employee";

export default function ViewEmployee() {
  const employeeTypes = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract Basis", label: "Contract Basis" },
    { value: "Other", label: "Other" },
  ];

  const [employees, setEmployees] = useState([]);
  const [selectedType, setSelectedType] = useState("null");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  useEffect(() => {
    getEmployee(currentPage, selectedType).then((res) => {
      setEmployees(res);
    });
  }, [currentPage, selectedType]);

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption.value);
  };

  function deleteHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value === true) {
        deleteEmployee(id).then((res) => {
          if (res) {
            Swal.fire({
              title: "Success!",
              text: "Your file has been deleted",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  }

  return (
    <>
      <h1 className="fs-1 mb-3">People</h1>
      <div className="d-flex justify-content-end mb-5 p-3">
        <Select
          options={employeeTypes}
          value={selectedType}
          onChange={handleTypeChange}
          placeholder="Select employee type"
          className="p-2"
        />
        <Link to={"/Add"}>
          <button type="button" className="btn btn-primary p-2">
            Add People
          </button>
        </Link>
      </div>
      <table className="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Display Name</th>
            <th>Emp ID</th>
            <th>Designation</th>
            <th>Emp.Type</th>
            <th>Experience</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.PrefferedName}</td>
                <td>{value.EmployeeID}</td>
                <td>{value.Designation}</td>
                <td>{value.EmployeeType}</td>
                <td>{value.Experience}</td>
                <td>
                  <Link to={"/update/" + value._id}>
                    <button
                      type="button"
                      class="btn btn-link btn-sm btn-rounded"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-link btn-sm btn-rounded"
                    onClick={() => deleteHandler(value._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
