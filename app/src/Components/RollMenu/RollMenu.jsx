import './RollMenu.css';

function RollMenu({id, title, options}) {

    return (
      <>
        <label htmlFor={id}>{title}</label>
        <select
          id={id}
          options={options}
          onChange={(value) => console.log("change!", value.target.value)}
        >
            {options.map((option) => <option key={option.name}>{option.name}</option>)}
        </select>
      </>
    );
}

export default RollMenu;