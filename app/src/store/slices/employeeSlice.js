import { createSlice } from "@reduxjs/toolkit";
import { departments, states } from '../../arrays';


export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [], //array of employees, with data for each object available under
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
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees.push({...action.payload}); //adding one employee to the array
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
  },
});

export const { setEmployees, setError } = EmployeeSlice.actions;
export const { selectEmployees, selectError } = EmployeeSlice.selectors;

export const addEmployee = (data) => async (dispatch) => {
  try {
    dispatch(setEmployees(data));//if the employee data is valid, then add employee
  } catch (error) {
    dispatch(setError(error.toString())); //else, send an error
  }
}

export const fill100Employees = (array100) => {
    
    const start = new Date("2000-01-01")
    const end = new Date("2026-01-01")
    const generateRandomString = (length) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            result += alphabet.charAt(randomIndex);
        }
        
        return result;
    }
    function getRandomDate(start, end) {
        var randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
        var randomDate = new Date(randomTime).toDateString();
        return randomDate;
    }
    
    for (let i = 0; i < 50; i++) {
        const randState = states[Math.floor(Math.random() * states.length)].name;
        const randDept = departments[Math.floor(Math.random() * departments.length)].name;
        array100.push(
            {
                "firstName" : `${generateRandomString(8)}`,
                "lastName" : `${generateRandomString(8)}`,
                "dateOfBirth" : `${getRandomDate(start,end)}`,
                "startDate" : `${getRandomDate(start,end)}`,
                "street" : `${generateRandomString(8)}`,
                "city" : `${generateRandomString(8)}`,
                "state" : `${randState}`,
                "zipCode" : `${Math.floor(Math.random() * 99999) + 1}`,
                "department" : `${randDept}`,
            }
        );
    }
};