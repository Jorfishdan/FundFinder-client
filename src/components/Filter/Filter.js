import arrow from "../../assets/images/arrow2.png";
import TypeMod from "../TypeMod/TypeMod";
import LocationMod from "../LocationMod/LocationMod";
import GenderMod from "../GenderMod/GenderMod";
import { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

function Filter({setPage, filteredResults, setFilteredResults }) {

  const [openModal, setOpenModal] = useState(false);
  const [openModalLocation, setOpenModalLocation] = useState(false);
  const [openModalGender, setOpenModalGender] = useState(false);
  const [showResults, setShowResults] = useState(false);

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

  const [checkedGender, setCheckedGender] = useState ({
    female: false, 
    LGBTQIA: false, 
    male: false,
    other: false,
  })
 
  function typeHandler() {
    setOpenModal(prevOpenModal => !prevOpenModal);
  }

  function locationHandler() {
    setOpenModalLocation(prevOpenModalLocation  => !prevOpenModalLocation);
  }

  function genderHandler() {
    setOpenModalGender(prevOpenModalGender  => !prevOpenModalGender);
  }

  function handleFilterSubmit() {
    setShowResults(true)
    const filterValues = {
      type: checkedTypes,
      location: checkedLocation,
      gender: checkedGender,
    };
  
    axios
    .get(`http://localhost:8080/funding?location=${encodeURIComponent(Object.keys(checkedLocation).filter(key => checkedLocation[key]).join(','))}&gender=${encodeURIComponent(Object.keys(checkedGender).filter(key => checkedGender[key]).join(','))}`)
      .then((response) => {
        console.log("received response:", response.data);
        setFilteredResults(response.data);
        setPage(response.data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }

  function handleResetClick() {
    setShowResults(false)
    setCheckedTypes({
      scholarship: false, 
      grant: false,
      bursary: false, 
      loan: false
    });
    setCheckedLocation({
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
    });
    setCheckedGender({
      female: false, 
      LGBTQIA: false, 
      male: false,
      other: false,
    });
  }
    
  return (
    <>
      <section className="filter">
        <div className="filter__wrapper">
          <article className="filter__item" onClick = {typeHandler}> 
            Type
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
            />
          </article>
          <article className="filter__item" onClick = {locationHandler}>
            Location
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
              
            />
          </article>
          <article className="filter__item" onClick = {genderHandler}>
            Gender
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
              
            />
          </article>
         
          <button className="filter__search" onClick={handleFilterSubmit}>Apply Filters</button>
          <button className="filter__reset" onClick={handleResetClick}>Reset</button>
        </div>
        <TypeMod openModal ={openModal} checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} />
        <LocationMod openModal ={openModalLocation} checkedLocation={checkedLocation} setCheckedLocation={setCheckedLocation} />
        <GenderMod openModal ={openModalGender} checkedGender={checkedGender} setCheckedGender={setCheckedGender} />
      </section>
    </>
  );
}

export default Filter;

