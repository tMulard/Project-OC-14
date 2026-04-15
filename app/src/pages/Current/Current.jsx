import { Link } from "react-router";
import './Current.css'
import DataTableComponent from "../../Components/DataTable/DataTable";

function Current() {
  

    
  return (
    <main id="employee-div" className="container">
      <h1>Current Employees</h1>
      <DataTableComponent />
      <Link to="/" className="homeLink">Home</Link>
    </main>
  );
}

export default Current
