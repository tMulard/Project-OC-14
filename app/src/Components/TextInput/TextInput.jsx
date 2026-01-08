import './TextInput.css';

function TextInput({id, name, title, valueText, changeText}) {

    return(
        <>
            <label htmlFor={id}>{title}</label>
            <input id={id} type="text" name={name} value={valueText} onChange={changeText}/>
        </>
    );
}

export default TextInput;