import { Link } from "react-router";
import './Current.css'
import DataTableComponent from "../../Components/DataTable/DataTable";

function Current() {
  

    
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTableComponent />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Current
