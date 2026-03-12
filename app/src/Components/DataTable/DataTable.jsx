import './DataTable.css';
import { selectEmployees } from '../../store/slices/employeeSlice';
import {useSelector} from "react-redux";
import { useEffect, useState } from 'react';

import {DataTable} from "simple-datatables";


function DataTableComponent() {
    const employees = useSelector(selectEmployees);
    
    const [tableData, setTableData] = useState([]);
    
    
    const dataTable = new DataTable("#myTable",
      {
        columns : ['First Name', 'Last Name', 'Date of birth', 'Start date', 'Street', 'City', 'State', 'Zip code', 'Department'],
        data : {tableData}
      }
    );


    useEffect(()=>{
        // setTableData([['a','a','24/12/1969','25/12/2000','a','a','Ohio','75000','Sales']]); ajout de données test
        const employeeArray = []
        employees?.map((employee) => {
            employeeArray.push([employee.firstName,employee.lastName,employee.dateOfBirth,employee.startDate,employee.street,employee.city,employee.state,employee.zipCode,employee.department])
        })
        setTableData(employeeArray)
    },[employees]);
    
    return (
      <>
        <DataTable columns={dataTable.columns} data={dataTable.data}/>
        {/* <DataTable data={tableData} className="display">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Start Date</th>
              <th scope="col">Street</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
        </DataTable> */}
      </>
    );
}

export default DataTableComponent;