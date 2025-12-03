import { Link } from "react-router";
// import Modal from "hrnet-pluginsimplemodal";
import "./App.css";
import { useData } from "../../hooks/useData";
import DatePicker from "../../Components/DatePicker/DatePicker";
import DataTable from "../../Components/DataTable/DataTable";
import RollMenu from "../../Components/RollMenu/RollMenu";
import TextInput from "../../Components/TextInput/TextInput";

function App() {
  const { setEmployees } = useData();

  // const [isHidden, setIsHidden] = useState(true);

  // const handleClick = () => { setIsHidden(!isHidden); };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setEmployees(prev => [
      ...prev, data
    ]);

    // setIsHidden(!isHidden);
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={onSubmit}>
          <TextInput id="first-name" name="firstname" title="First Name" />
          <TextInput id="last-name" name="lastname" title="Last Name" />
          <DatePicker id="date-of-birth" name="dateOfBirth" title="Date of Birth" />
          <DatePicker id="start-date" name="startDate" title="Start Date" />
          <fieldset className="address">
            <legend>Address</legend>
            <TextInput id="street" name="street" title="Street" />
            <TextInput id="city" name="city" title="City" />
            <RollMenu id="state" name="state" title="State" />
            <TextInput id="zip-code" name="zipCode" title="Zip Code" />
          </fieldset>
          <label htmlFor="department">Department</label>
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
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
      {/* <Modal id="confirmation" isHidden={isHidden} isHiddenCross={false} toggleDisplay={handleClick}>
        <h1>Employee Created!</h1>
      </Modal> */}
    </div>
  );
}

export default App;
