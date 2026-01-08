import './RollMenu.css';

function RollMenu({id, title, options, valueRoll, changeRoll}) {

    return (
      <>
        <label htmlFor={id}>{title}</label>
        <select
          id={id}
          name={id}
          options={options}
          onChange={changeRoll} //{(value) => console.log("change!", value.target.value)}
          value={valueRoll}
        >
            {options.map((option) => <option key={option.name}>{option.name}</option>)}
        </select>
      </>
    );
}

export default RollMenu;