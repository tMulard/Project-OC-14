import { createSlice } from "@reduxjs/toolkit";

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    department: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
  },
  selectors: {
    selectFirstName: (state) => state.firstName,
    selectLastName: (state) => state.lastName,
    selectDateOfBirth: (state) => state.dateOfBirth,
    selectStartDate: (state) => state.startDate,
    selectDepartment: (state) => state.department,
    selectStreet: (state) => state.street,
    selectCity: (state) => state.city,
    selectState: (state) => state.state,
    selectZipCode: (state) => state.zipCode,
  },
});

export const { setFirstName, setLastName, setDateOfBirth, setStartDate, setDepartment, setStreet, setCity, setState, setZipCode } = EmployeeSlice.actions;
export const { selectFirstName, selectLastName, selectDateOfBirth, selectStartDate, selectDepartment, selectStreet, selectCity, selectState, selectZipCode } = EmployeeSlice.selectors;
