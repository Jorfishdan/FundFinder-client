import { useState } from "react";
import './TypeMod.scss';

function TypeMod({openModal, typeFilterValues,  setTypeFilterValues}) { 
   
    const [filterValues, setFilterValues] = useState ({ scholarship:false, grant: false, bursary: false, loan: false})
    const handleInputChange= (event)=> {
        const {name, checked } = event.target;
        setFilterValues((prevFilterValues) => ({ 
            ...prevFilterValues,
            [name]:checked,
        }) )
    }
    if (!openModal) return null;

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     onSubmit(filterValues);
    // }

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
        <span className="typemod__grants">Grant
        <label htmlFor="grant">
            < input
            type = "checkbox"
            name = "grant"
            id="grant"
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