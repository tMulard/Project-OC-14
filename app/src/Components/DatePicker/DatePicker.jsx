import './DatePicker.css';

function DatePicker({id, name, title}) {

    return(
        <>
            <label htmlFor={id}>{title}</label>
            <input id={id} type="date" name={name} />
        </>
    );
}

export default DatePicker;