import './DataTable.css';
import { selectEmployees } from '../../store/slices/employeeSlice';
import {useSelector} from "react-redux";
import { useEffect, useState } from 'react';

import { Table } from 'antd';

function DataTableComponent() {
    const employees = useSelector(selectEmployees);
    
    const [tableData, setTableData] = useState([]);
    
    // const dataSource = [
    //   {
    //     key: '101',
    //     firstName: 'dupont',
    //     lastName:'dupont',
    //     dateOfBirth:'2025-01-01',
    //     startDate:'2026-01-01',
    //     street:'azfszdf',
    //     city:'gdhdfjfg',
    //     state:'Alabama',
    //     zipCode:'75000',
    //     department:'Human Ressources',
    //   },
    // ];

    const columns = [
      {
        title: 'First Name',
        dataIndex: 'firstName',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
      },
      {
        title: 'Date of Birth',
        dataIndex: 'dateOfBirth',
      },
      {
        title: 'Start Date',
        dataIndex: 'startDate',
      },
      {
        title: 'Street',
        dataIndex: 'street',
      },
      {
        title: 'City',
        dataIndex: 'city',
      },
      {
        title: 'State',
        dataIndex: 'state',
      },
      {
        title: 'Zip Code',
        dataIndex: 'zipCode',
      },
      {
        title: 'Department',
        dataIndex: 'department',
      },
    ];

    useEffect(()=>{
        const employeeArray = []
        employees?.map((employee, index) => {
            employeeArray.push([index,employee.firstName,employee.lastName,employee.dateOfBirth,employee.startDate,employee.street,employee.city,employee.state,employee.zipCode,employee.department])
        })
        setTableData(employeeArray)
    },[employees]);
    
    return (
      <>
        <Table dataSource={tableData} columns={columns}/>
      </>
    );
}

export default DataTableComponent;