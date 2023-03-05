import arrow from "../../assets/images/arrow2.png";
import TypeMod from "../TypeMod/TypeMod";
import LocationMod from "../LocationMod/LocationMod";
import GenderMod from "../GenderMod/GenderMod";
import { useState } from "react";

function Filter({setPage, filteredResults,setFilteredResults }) {

  const [openModal, setOpenModal] = useState(false);
  const [openModalLocation, setOpenModalLocation] = useState(false);
  const [openModalGender, setOpenModalGender] = useState(false);
  const [allResults, setAllResults] = useState([]);

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

  // const [datePostedFilterValues, setDatePostedFilterValues] = useState ({})

  function typeHandler() {
    setOpenModal(prevOpenModal => !prevOpenModal);
  }

  function locationHandler() {
    setOpenModalLocation(prevOpenModalLocation => !prevOpenModalLocation);
  }

 function genderHandler() {
    setOpenModalGender(prevOpenModalGender => !prevOpenModalGender);
  }

  function handleTypleFilterChange(values) {
    setTypeFilterValues(values)
  }

  function handleLocationFilterChange(values) {
    setLocationFilterValues(values)
  }

  function handleGenderFilterChange(values) {
    setGenderFilterValues(values)
  }

  function handleFilterSubmit() {
    const filteredResults = allResults.filter(result => {
      let typeMatch = true;
      if (filterValues.type.scholarship) {
        typeMatch = typeMatch && result.type === "Scholarship";
      }
      if (filterValues.type.grant) {
        typeMatch = typeMatch && result.type === "Grant";
      }
      if (filterValues.type.bursary) {
        typeMatch = typeMatch && result.type === "Bursary";
      }
      if (filterValues.type.loan) {
        typeMatch = typeMatch && result.type === "Loan";
      }
      
      let locationMatch = true;
      if (filterValues.location.BC) {
        locationMatch = locationMatch && result.location === "BC";
      }
      if (filterValues.location.Manitoba) {
        locationMatch = locationMatch && result.location === "Manitoba";
      }
      // Add more location filters here
      
      let genderMatch = true;
      if (filterValues.gender.female) {
        genderMatch = genderMatch && result.gender === "Female";
      }
      if (filterValues.gender.male) {
        genderMatch = genderMatch && result.gender === "Male";
      }
      // Add more gender filters here
      
      return typeMatch && locationMatch && genderMatch;
    });
    
    setFilteredResults(filteredResults);
    setPage(filteredResults);
  }
  
  // function handleFilterSubmit() {
  //   const filterValues = {
  //     type: typeFilterValues,
  //     location: locationFilterValues,
  //     gender: genderFilterValues,
  //   }
  //   setFilterValues(filterValues);
  //   setPage(filteredResults)
  //   console.log(filterValues)
  // }
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
