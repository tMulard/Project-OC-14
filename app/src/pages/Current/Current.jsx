import { Link } from "react-router";
import './Current.css'


function Current() {
  

    
  return (
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>

      <table>
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
        {/* {employees?.map((employee) => (
          <tr>
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
        ))} */}
      </table>

      <Link to="/">Home</Link>
    </div>
  );
}

export default Current
