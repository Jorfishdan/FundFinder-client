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

  const [checkedLocation, setCheckedLocation] = useState ({
    BC: false,
    Manitoba: false,
    Saskatchewan: false,
    Brunswick: false,
    NWT: false,
    Yukon: false,
    PEI: false,
    Ontario: false,
    Nunavut: false,
    Quebec: false,
    Newfoundland: false,
    NS: false,
  })
 
  function typeHandler() {
    setOpenModal(prevOpenModal => !prevOpenModal);
  }

  function locationHandler() {
    setOpenModalLocation(prevOpenModalLocation  => !prevOpenModalLocation);
  }

  
  function handleFilterSubmit() {
    const filterValues = {
      type: checkedTypes,
      location: checkedLocation,
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
              onClick = {locationHandler}
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
        <LocationMod openModal ={openModalLocation} checkedLocation={checkedLocation} setCheckedLocation={setCheckedLocation} />
        {/* <GenderMod openModal ={openModalGender} filterValues={genderFilterValues} setFilterValues={setGenderFilterValues} /> */}
      </section>
    </>
  );
}

export default Filter;
