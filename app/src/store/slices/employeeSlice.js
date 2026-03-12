import { createSlice } from "@reduxjs/toolkit";
import { fill100Employees } from "../../arrays";

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: fill100Employees(), //array of employees, with data for each object available under
    error: "",
    success: "",
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({...action.payload}); //adding one employee to the array
      state.success = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  selectors: {
    selectEmployees: (state) => state.employees,
    selectError : (state) => state.error,
    selectSuccess : (state) => state.success,
  },
});

export const { addEmployee, setError, setSuccess } = EmployeeSlice.actions;
export const { selectEmployees, selectError, selectSuccess } = EmployeeSlice.selectors;
