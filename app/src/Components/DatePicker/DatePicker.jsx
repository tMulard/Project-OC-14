import './DatePicker.css';

function DatePicker({id, name, title, valueDate, changeDate}) {

    return(
        <>
            <label htmlFor={id}>{title}</label>
            <input id={id} type="date" name={name} value={valueDate} onChange={changeDate} />
        </>
    );
}

export default DatePicker;