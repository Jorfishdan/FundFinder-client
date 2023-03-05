import { useState } from "react";
import './TypeMod.scss';

function TypeMod({openModal}) { 
   
    const [filterValues, setFilterValues] = useState ({ scholarship:false, grants: false, bursary: false, loan: false})
    const handleInputChange= (event)=> {
        const {name, checked } = event.target;
        setFilterValues((prevFilterValues) => ({ 
            ...prevFilterValues,
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
            checked={filterValues.scholarship}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="typemod__grants">Grants
        <label htmlFor="grants">
            < input
            type = "checkbox"
            name = "grants"
            id="grants"
            checked={filterValues.grants}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="typemod__bursary">Bursary
        <label htmlFor="bursary">
            < input
            type = "checkbox"
            name = "bursary"
            id="bursary"
            checked={filterValues.bursary}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="typemod__bursary">Loan
        <label htmlFor="loan">
            < input
            type = "checkbox"
            name = "loan"
            id="loan"
            checked={filterValues.loan}
            onChange={handleInputChange} />
        </label>
        </span>
        </div>
    </form>
    </>
)
}
export default TypeMod;