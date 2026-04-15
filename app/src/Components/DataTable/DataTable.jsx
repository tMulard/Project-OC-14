import './DataTable.css';
import { filterResults, selectEmployees, selectResults } from '../../store/slices/employeeSlice';
import {useSelector, useDispatch} from "react-redux";

import { Table } from 'antd';
import { useEffect, useState } from 'react';

function DataTableComponent() {
    const employees = useSelector(selectEmployees);
    const results = useSelector(selectResults);
    const dispatch = useDispatch();
    const [queryState, setQueryState] = useState('');

    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstName',
        sorter: (a, b) => a.firstName.localeCompare(b.firstName),
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dateOfBirth',
        sorter: (a, b) => a.dateOfBirth.localeCompare(b.dateOfBirth),
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'Start Date',
        dataIndex: 'startDate',
        sorter: (a, b) => a.startDate.localeCompare(b.startDate),
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'Street',
        dataIndex: 'street',
        sorter: (a, b) => a.street.localeCompare(b.street),
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'City',
        dataIndex: 'city',
        sorter: (a, b) => a.city.localeCompare(b.city),
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'State',
        dataIndex: 'state',
        sorter: (a, b) => a.state.localeCompare(b.state),
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'Zip Code',
        dataIndex: 'zipCode',
        sorter: (a, b) => a.zipCode - b.zipCode,
        sortDirections: ['descend','ascend'],
      },
      {
        title: 'Department',
        dataIndex: 'department',
        sorter: (a, b) => a.department.localeCompare(b.department),
        sortDirections: ['descend','ascend'],
      },
    ];

    const [tableData, setTableData] = useState(employees);
    
    //Delayed launch function
    function debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }
    //Delayed search
    const debouncedSearchResults = debounce(searchResults, 500);

    const handleChange = (event) => {
      debouncedSearchResults(event.target.value);
    };

    function searchResults (query) {
      //Starting search for at least 3 characters
      if (query.length >= 3) { 
        setQueryState(query);
        return dispatch(filterResults(query));
      }
      return setTableData(employees);
    }
    //Refresh data and switching from employee array to the results
    useEffect(()=> {
      if (results.length > 0) {setTableData(results);}
      if (results.length === 0 && queryState?.length >= 3) {setTableData([]);}
    },[results, queryState]);

    return (
      <>
        <label className='inputContainer'>
          Search:
          <input className="searchInput" type='search' name='searchInput' onChange={handleChange}/> 
        </label>
        {/* If the employee array is filled, show the data table */}
        {employees.length > 0 && <Table dataSource={tableData} columns={columns} id="employee-table" pagination={{ placement: ['bottomEnd'] }} showSorterTooltip={{ target: 'sorter-icon' }} />}
      </>
    );
}

export default DataTableComponent;