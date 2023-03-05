import arrow from "../../assets/images/arrow2.png";
import TypeMod from "../TypeMod/TypeMod";
import LocationMod from "../LocationMod/LocationMod";
import GenderMod from "../GenderMod/GenderMod";
import { useState } from "react";

function Filter({setPage, filteredResults, setFilteredResults }) {
 

  const [openModal, setOpenModal] = useState(false);
  const [openModalLocation, setOpenModalLocation] = useState(false);
  const [openModalGender, setOpenModalGender] = useState(false);
  const [allResults, setAllResults] = useState([]);

  const [filterValues, setFilterValues] =  useState({});
  const [checkedTypes, setCheckedTypes] = useState ({
    scholarship: false, 
    grant: false,
    bursary: false, 
    loan: false
  })

 
  function typeHandler() {
    setOpenModal(prevOpenModal => !prevOpenModal);
  }

  
  function handleFilterSubmit() {
    const filterValues = {
      type: checkedTypes,
      // location: locationFilterValues,
      // gender: genderFilterValues,
    }
    setFilterValues(filterValues);
    setPage(filteredResults)
    console.log(filterValues)
  }
  return (
    <>
      <section className="filter">
        <div className="filter__wrapper">
          <article className="filter__item"> 
            Type
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
              onClick = {typeHandler}
            />
          </article>
          <article className="filter__item">
            Location
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
              // onClick = {locationHandler}
            />
          </article>
          <article className="filter__item">
            Gender
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
              // onClick = {genderHandler}
            />
          </article>
         
          <button className="filter__search" onClick={handleFilterSubmit}>Search</button>
          <button className="filter__reset">Reset</button>
        </div>
        <TypeMod openModal ={openModal} checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} />
        {/* <LocationMod openModal ={openModalLocation} filterValues={locationFilterValues} setFilterValues={setLocationFilterValues} /> */}
        {/* <GenderMod openModal ={openModalGender} filterValues={genderFilterValues} setFilterValues={setGenderFilterValues} /> */}
      </section>
    </>
  );
}

export default Filter;
