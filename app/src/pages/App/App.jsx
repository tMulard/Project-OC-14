import { Link } from "react-router";

import "./App.css";
import { useData } from "../../hooks/useData";

function App() {
  const { setEmployees } = useData();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setEmployees(prev => [
      ...prev, data
    ]);
  };

  return (
    <div>
      <div class="title">
        <h1>HRnet</h1>
      </div>
      <div class="container">
        <Link to="/current">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={onSubmit}>
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" name="firstName" />
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName" />
          <label for="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="date" name="dateOfBirth" />
          <label for="start-date">Start Date</label>
          <input id="start-date" type="date" name="startDate" />
          <fieldset class="address">
            <legend>Address</legend>
            <label for="street">Street</label>
            <input id="street" type="text" name="street" />
            <label for="city">City</label>
            <input id="city" type="text" name="city" />
            <label for="state">State</label>
            <select name="state" id="state"></select>
            <label for="zip-code">Zip Code</label>
            <input id="zip-code" type="number" name="zipCode" />
          </fieldset>
          <label for="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
      <div id="confirmation" class="modal">
        Employee Created!
      </div>
    </div>
  );
}

export default App;
