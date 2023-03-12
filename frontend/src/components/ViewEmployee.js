import React, { useState, useEffect } from "react";
import Select from "react-select";

import { getEmployee } from "../controllers/employee";

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

  return (
    <>
      <h1 className="fs-1">People</h1>
      <div>
        <Select
          options={employeeTypes}
          value={selectedType}
          onChange={handleTypeChange}
          placeholder="Select employee type"
        />
        <button type="button" class="btn btn-primary">
          Add People
        </button>
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
                  <button type="button" class="btn btn-link btn-sm btn-rounded">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-link btn-sm btn-rounded">
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
