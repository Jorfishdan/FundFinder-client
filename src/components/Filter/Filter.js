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
    const filterValues = {
      type: checkedTypes,
      location: checkedLocation,
      gender: checkedGender,
    }
    setFilteredResults(filterValues);
    setPage(filteredResults)
    console.log(filterValues)
    sendFilterData()

  }

  function sendFilterData() {
    axios.post(`http://localhost:8080/funding`, {
      id: uuidv4(),
      type:checkedTypes,
      location:checkedLocation,
      gender:checkedGender,
    })
    .then(response => {
      console.log("received response:", response.data);
    })
    .catch(error => {
      console.error("error:", error);
    });
  }

  // useEffect(() => {
  //   axios.post(`http://localhost:8080/funding`, {
  //     id: uuidv4(),
  //     type:checkedTypes,
  //     location:checkedLocation,
  //     gender:checkedGender,

  //   })
  //   .then(response => {
  //     console.log("received response:", response.data);
     
  //   })
  //   .catch(error => {
  //     console.error("error:", error);
  //   });
  // }, []); 
  

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
         
          <button className="filter__search" onClick={handleFilterSubmit}>Search</button>
          <button className="filter__reset">Reset</button>
        </div>
        <TypeMod openModal ={openModal} checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} />
        <LocationMod openModal ={openModalLocation} checkedLocation={checkedLocation} setCheckedLocation={setCheckedLocation} />
        <GenderMod openModal ={openModalGender} checkedGender={checkedGender} setCheckedGender={setCheckedGender} />
      </section>
    </>
  );
}

export default Filter;

// const queryString = Object.entries(filterValues)
  // .map(([key, value]) => {
  //   const filters = Object.entries(value)
  //     .filter(([_, checked]) => checked)
  //     .map(([filter]) => `${key}=${filter}`);
  //   if (filters.length > 0) {
  //     return filters.join("&");
  //   } else {
  //     return null;
  //   }
  // })
  // .filter((query) => query !== null)
  // .join("&");
  // `http://localhost:8080?${queryString}`

  //////////GET REQUEST //////////////////

  //   axios
  // .get(`http://localhost:8080/funding`)
  // .then((response) => {
  //   setFilteredResults(response.data);
  //   console.log(response.data)
  //   setPage(response.data);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
