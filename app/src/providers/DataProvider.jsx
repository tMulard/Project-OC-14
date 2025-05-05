import { createContext, useState } from "react";

export const DataContext = createContext({
  employees: [],
  setEmployees: () => {},
});

export const DataProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  return (
    <DataContext.Provider value={{ employees, setEmployees }}>
      {children}
    </DataContext.Provider>
  );
};
