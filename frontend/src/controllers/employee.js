import axios from "axios";

//Config
import { baseURL } from "../config";

export const AddEmployee = async (details) => {
  const { data } = await axios.post(baseURL + "/employee/addEmployee", details);
  return data;
};

export const getEmployee = async (currentPage, selectedType) => {
  const { data } = await axios.get(
    baseURL +
      `/employee/getEmployee?page=${currentPage}&limit=5&selectedType=${selectedType}`
  );
  return data;
};

export const deleteEmployee = async (id) => {
  const { data } = await axios.post(baseURL + "/employee/deleteEmployee/", {
    id: id,
  });
  return data;
};
export const updateEmployee = async (details) => {
  console.log("fControl");
  console.log(details);

  const { data } = await axios.post(
    baseURL + "/employee/updateEmployee/",
    details
  );
  console.log(data);
  return data;
};

export const getSelectedEmployee = async (id) => {
  const { data } = await axios.post(
    baseURL + "/employee/getSelectedEmployee/",
    {
      id: id,
    }
  );
  return data;
};
