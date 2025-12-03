import './TextInput.css';

function TextInput({id, name, title}) {

    return(
        <>
            <label htmlFor={id}>{title}</label>
            <input id={id} type="text" name={name} />
        </>
    );
}

export default TextInput;