import { useState } from 'react';
import './GenderMod.scss';

function GenderMod({openModal, typeFilterValues,  setTypeFilterValues}) {
    const [filterValues, setFilterValues] = useState ({ female:false, male: false, LGBTQI: false, other: false})
    const handleInputChange= (event)=> {
        const {name, checked } = event.target;
        setFilterValues((prevFilterValues) => ({ 
            ...prevFilterValues,
            [name]:checked,
        }) )
    }
    if (!openModal) return null;
    return(<>
    <form className="gender">
        <div className="gender__wrapper">
        <span className="gender__female">Female
        <label htmlFor="female">
            < input
            type = "checkbox"
            name = "female"
            id="female"
            checked={filterValues.female}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="gender__LGBTQIA">LGBTQIA+
        <label htmlFor="LGBTQIA">
            < input
            type = "checkbox"
            name = "LGBTQIA"
            id="LGBTQIA"
            checked={filterValues.LGBTQIA}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="gender__male">Male
        <label htmlFor="male">
            < input
            type = "checkbox"
            name = "male"
            id="male"
            checked={filterValues.male}
            onChange={handleInputChange} />
        </label>
        </span>
        <span className="gender__other">Other
        <label htmlFor="other">
            < input
            type = "checkbox"
            name = "other"
            id="other"
            checked={filterValues.other}
            onChange={handleInputChange} />
        </label>
        </span>

        </div>
    </form>
    </>)
}

export default GenderMod;