import arrow from "../../assets/images/arrow2.png";
import TypeMod from "../TypeMod/TypeMod";
import LocationMod from "../LocationMod/LocationMod";
import GenderMod from "../GenderMod/GenderMod";
import { useState } from "react";

function Filter({setPage, filteredResults,setFilteredResults }) {

  const [openModal, setOpenModal] = useState(false);
  const [openModalLocation, setOpenModalLocation] = useState(false);
  const [openModalGender, setOpenModalGender] = useState(false);

  const [filterValues, setFilterValues] =  useState({});
  const [typeFilterValues, setTypeFilterValues] = useState ({
    scholarship: false, 
    grant: false,
    bursary: false, 
    loan: false
  })

  const [locationFilterValues, setLocationFilterValues] = useState ({
    BC: false,
    Manitoba: false,
    Saskatchewan: false, 
    Brunswick: false,
    NWT: false,
    Yukon:false,
    PEI: false,
    Ontario: false,
    Nunavut:false,
    Quebec: false,
    Newfoundland: false,
    NS: false,

  })

  const [genderFilterValues, setGenderFilterValues] = useState ({
    female: false, 
    male: false, 
    LGBTQIA:false,
    other: false
  })

  const [datePostedFilterValues, setDatePostedFilterValues] = useState ({})

  function typeHandler() {
    setOpenModal(prevOpenModal => !prevOpenModal);
  }

  function locationHandler() {
    setOpenModalLocation(prevOpenModalLocation => !prevOpenModalLocation);
  }

 function genderHandler() {
    setOpenModalGender(prevOpenModalGender => !prevOpenModalGender);
  }
  function handleFilterSubmit(values) {
    // do something with the filter values
    console.log(values)
    setFilterValues(values);
    setPage(filteredResults)
    console.log("clicked")
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
              onClick = {genderHandler}
            />
          </article>
         
          {/* <article className="filter__item">
            Date Posted
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
            />
          </article> */}
          <button className="filter__search" onClick={handleFilterSubmit}>Search</button>
          <button className="filter__reset">Reset</button>
        </div>
        <TypeMod openModal ={openModal} filterValues={typeFilterValues} setFilterValues={setTypeFilterValues} />
        <LocationMod openModal ={openModalLocation} filterValues={locationFilterValues} setFilterValues={setLocationFilterValues} />
        <GenderMod openModal ={openModalGender} filterValues={genderFilterValues} setFilterValues={setGenderFilterValues} />
      </section>
    </>
  );
}

export default Filter;
