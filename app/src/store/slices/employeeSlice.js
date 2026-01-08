import { createSlice } from "@reduxjs/toolkit";
import { fill100Employees } from "../../arrays";

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: fill100Employees(), //array of employees, with data for each object available under
    // firstName: "",
    // lastName: "",
    // dateOfBirth: null,
    // startDate: null,
    // department: "",
    // street: "",
    // city: "",
    // state: "",
    // zipCode: "",
    error: "",
    success: "",
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({...action.payload}); //adding one employee to the array
      state.success = true;
    },
    // setFirstName: (state, action) => {
    //   state.firstName = action.payload;
    // },
    // setLastName: (state, action) => {
    //   state.lastName = action.payload;
    // },
    // setDateOfBirth: (state, action) => {
    //   state.dateOfBirth = action.payload;
    // },
    // setStartDate: (state, action) => {
    //   state.startDate = action.payload;
    // },
    // setDepartment: (state, action) => {
    //   state.department = action.payload;
    // },
    // setStreet: (state, action) => {
    //   state.street = action.payload;
    // },
    // setCity: (state, action) => {
    //   state.city = action.payload;
    // },
    // setState: (state, action) => {
    //   state.state = action.payload;
    // },
    // setZipCode: (state, action) => {
    //   state.zipCode = action.payload;
    // },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  selectors: {
    selectEmployees: (state) => state.employees,
    // selectFirstName: (state) => state.firstName,
    // selectLastName: (state) => state.lastName,
    // selectDateOfBirth: (state) => state.dateOfBirth,
    // selectStartDate: (state) => state.startDate,
    // selectDepartment: (state) => state.department,
    // selectStreet: (state) => state.street,
    // selectCity: (state) => state.city,
    // selectState: (state) => state.state,
    // selectZipCode: (state) => state.zipCode,
    selectError : (state) => state.error,
    selectSuccess : (state) => state.success,
  },
});

export const { addEmployee, setError, setSuccess } = EmployeeSlice.actions;
export const { selectEmployees, selectError, selectSuccess } = EmployeeSlice.selectors;
