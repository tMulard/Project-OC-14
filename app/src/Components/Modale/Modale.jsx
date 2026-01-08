import './Modale.css';
import { useState } from "react";

function Modale({isHidden, isHiddenCross, children, handleClick}) {

    return(
        <>
            {/* <button className="modaleBtn" onClick={handleClick}>
                Modal
            </button> */}

            <div className={isHidden ? "modale hidden" : "modale"}>
                {!isHiddenCross && (
                    <button onClick={handleClick} className="closeBtn"></button>
                )}
                {children}
            </div>
        </>
    );
}

export default Modale;