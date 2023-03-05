import {  useState } from "react";
import './TypeMod.scss';

function TypeMod({openModal, checkedTypes, setCheckedTypes}) { 
   
    const handleInputChange= (event)=> {
        const {name, checked } = event.target;
        setCheckedTypes((prevCheckedTypes) => ({ 
            ...prevCheckedTypes,
            [name]:checked,
            
        }) )
    
    }
  

    if (!openModal) return null;

return (
    <>
    <form className="typemod">
        <div className="typemod__wrapper">
            <span className="typemod__scholarship">Scholarship
        <label htmlFor="scholarship">
            < input
            type = "checkbox"
            name = "scholarship"
            id="scholarship"
            checked={checkedTypes.scholarship}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="typemod__grants">Grant
        <label htmlFor="grant">
            < input
            type = "checkbox"
            name = "grant"
            id="grant"
            checked={checkedTypes.grant}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="typemod__bursary">Bursary
        <label htmlFor="bursary">
            < input
            type = "checkbox"
            name = "bursary"
            id="bursary"
            checked={checkedTypes.bursary}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="typemod__bursary">Loan
        <label htmlFor="loan">
            < input
            type = "checkbox"
            name = "loan"
            id="loan"
            checked={checkedTypes.loan}
            onChange={handleInputChange} />
        </label>
        </span>
        </div>
    </form>
    </>
)
}
export default TypeMod;