import { selectEmployees } from '../../store/slices/employeeSlice';
import './DataTable.css';
import {useSelector} from "react-redux";
function DataTable() {
    const employees = useSelector(selectEmployees);
    return(
        <>
        <table>
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">Department</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {employees?.map((employee) => (
                <tr key={employee.firstName+employee.lastName}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state}</td>
                    <td>{employee.zipCode}</td>
                </tr>
                ))}
            </tbody>
      </table>
        </>
    );
}

export default DataTable;