import { configureStore } from "@reduxjs/toolkit";
import { EmployeeSlice } from "./slices/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: EmployeeSlice.reducer,
  },
});
