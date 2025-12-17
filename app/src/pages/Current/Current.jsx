import { Link } from "react-router";
import './Current.css'
import DataTable from "../../Components/DataTable/DataTable";

function Current() {
  

    
  return (
    <div id="employee-div" class="container">
      <h1>Current Employees</h1>
      <DataTable />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Current
