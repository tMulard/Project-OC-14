import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, selectError, selectSuccess } from "../../store/slices/employeeSlice.js";

import {departments, states} from "../../arrays.js";
import DatePicker from "../../Components/DatePicker/DatePicker";
import TextInput from "../../Components/TextInput/TextInput";
import RollMenu from "../../Components/RollMenu/RollMenu";

import { Modale } from 'hrnet-pluginsimplemodal';

function App() {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const success = useSelector(selectSuccess);
  const errorMsg = useSelector(selectError);

  const handleClick = () => { setIsHidden(!isHidden); };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};

    if (!formData.firstName) { errors.firstName = 'Error: First Name is required';}
    if (!formData.lastName) { errors.lastName = 'Error: Last Name is required';}
    if (!formData.dateOfBirth) { errors.dateOfBirth = 'Error: Date of birth is required';}
    if (!formData.startDate) { errors.startDate = 'Error: Start date is required';}
    if (!formData.street) { errors.street = 'Error: Street is required';}
    if (!formData.city) { errors.city = 'Error: City is required';}
    if (!formData.state) { errors.state = 'Error: State is required';}
    if (!formData.zipCode) { errors.zipCode = 'Error: Zip code is required';}
    if (!formData.department) { errors.department = 'Error: Department is required';}


    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    dispatch(addEmployee(formData));
    //flush data after
  };
  
  useEffect(()=>{
    if (success) { setIsHidden(false); }
  },[success]);
  
  return (
    <section>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/current">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={onSubmit}>
          <TextInput id="first-name" name="firstName" title="First Name" valueText={formData.firstName} changeText={handleChange}/>
          {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
          <TextInput id="last-name" name="lastName" title="Last Name" valueText={formData.lastName} changeText={handleChange}/>
          {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
          <DatePicker id="date-of-birth" name="dateOfBirth" title="Date of Birth" valueDate={formData.dateOfBirth} changeDate={handleChange}/>
          {formErrors.dateOfBirth && <p className="error">{formErrors.dateOfBirth}</p>}
          <DatePicker id="start-date" name="startDate" title="Start Date" valueDate={formData.startDate} changeDate={handleChange}/>
          {formErrors.startDate && <p className="error">{formErrors.startDate}</p>}
          <fieldset className="address">
            <legend>Address</legend>
            <TextInput id="street" name="street" title="Street" valueText={formData.street} changeText={handleChange}/>
            {formErrors.street && <p className="error">{formErrors.street}</p>}
            <TextInput id="city" name="city" title="City" valueText={formData.city} changeText={handleChange}/>
            {formErrors.city && <p className="error">{formErrors.city}</p>}
            <RollMenu id="state" title="State" options={states} valueRoll={formData.state} changeRoll={handleChange}/>
            {formErrors.state && <p className="error">{formErrors.state}</p>}
            <TextInput id="zip-code" name="zipCode" title="Zip Code" valueText={formData.zipCode} changeText={handleChange}/>
            {formErrors.zipCode && <p className="error">{formErrors.zipCode}</p>}
          </fieldset>
          <RollMenu id="department" title="Departments" options={departments} valueRoll={formData.department} changeRoll={handleChange}/>
          {formErrors.department && <p className="error">{formErrors.department}</p>}
          {errorMsg && <p className="error">{errorMsg}</p>}
          <button type="submit">Save</button>
        </form>
      </div>
      <Modale id="confirmation" isHidden={isHidden} isHiddenCross={false} handleClick={handleClick}>
        <h1>Success! Your employee was added to the list.</h1>
      </Modale>
    </section>
  );
}

export default App;   