import { Link } from "react-router";
// import Modal from "hrnet-pluginsimplemodal";
import "./App.css";

import DatePicker from "../../Components/DatePicker/DatePicker";
import TextInput from "../../Components/TextInput/TextInput";
import RollMenu from "../../Components/RollMenu/RollMenu";
import {departments, states} from "../../arrays.js";
import { addEmployee, selectSuccess } from "../../store/slices/employeeSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Modale from "../../Components/Modale/Modale.jsx";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const success = useSelector(selectSuccess);

  const handleClick = () => { setIsHidden(!isHidden); };
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    //let?
    dispatch(addEmployee(data));
    //flush data after
  };
  
  useEffect(()=>{
    
    if (success) {
      setIsHidden(!isHidden);
    }       
  },[success]);


  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={onSubmit}>
          <TextInput id="first-name" name="firstName" title="First Name" />
          <TextInput id="last-name" name="lastName" title="Last Name" />
          <DatePicker id="date-of-birth" name="dateOfBirth" title="Date of Birth" />
          <DatePicker id="start-date" name="startDate" title="Start Date" />
          <fieldset className="address">
            <legend>Address</legend>
            <TextInput id="street" name="street" title="Street" />
            <TextInput id="city" name="city" title="City" />
            <RollMenu id="state" title="State" options={states} />
            <TextInput id="zip-code" name="zipCode" title="Zip Code" />
          </fieldset>
          <RollMenu id="department" title="Departments" options={departments} />
          <button type="submit">Save</button>
        </form>
      </div>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
      <Modale id="confirmation" isHidden={isHidden} isHiddenCross={false} handleClick={handleClick}>
        <h1>Success! Your employee was added to the list.</h1>
      </Modale>
    </div>
  );
}

export default App;
