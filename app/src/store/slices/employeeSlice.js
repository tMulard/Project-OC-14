import { createSlice } from "@reduxjs/toolkit";
import { fill100Employees } from "../../arrays";

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: fill100Employees(), //array of employees, with data for each object available under
    results:[], //array containing search results, to be switched to when showing results
    error: "",
    success: "",
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({...action.payload}); //adding one employee to the array
      state.success = true;
    },
    loadResults: (state, action) => {
      state.results = action.payload;
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
    selectResults: (state) => state.results,
    selectError : (state) => state.error,
    selectSuccess : (state) => state.success,
  },
});

export const { addEmployee, loadResults, setError, setSuccess } = EmployeeSlice.actions;
export const { selectEmployees, selectResults, selectError, selectSuccess } = EmployeeSlice.selectors;


export const filterResults = (query) => (dispatch, getState) => {
  //Getting the current state of the employee array
  const employees = selectEmployees(getState());
  const lcQuery = query.toLowerCase()
  //Filtering through the array by checking if any part of it contains the query string
  const result = employees.filter((employee) => {
    return ['firstName','lastName','dateOfBirth','startDate','street','city','state','zipCode', 'department'].some((key) => {
      if (employee[key].toLowerCase().includes(lcQuery)) {
        return true
      }
    })
  })
  dispatch(loadResults(result))
}