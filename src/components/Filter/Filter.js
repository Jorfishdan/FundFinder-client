import "./Filter.scss";
import arrow from "../../assets/images/arrow2.png";
import TypeMod from "../TypeMod/TypeMod";
import { useState } from "react";

function Filter({setPage}) {
  const [openModal, setOpenModal] = useState(false);

  function modalHandler() {
    setOpenModal(prevOpenModal => !prevOpenModal);
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
              onClick = {() => modalHandler()}
            />
          </article>
          <article className="filter__item">
            Location
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
            />
          </article>
          <article className="filter__item">
            Gender
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
            />
          </article>
          <article className="filter__item">
            Location
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
            />
          </article>
          <article className="filter__item">
            Date Posted
            <img
              src={arrow}
              alt="down arrow to open options"
              className="filter__arrow"
            />
          </article>
          <button className="filter__search">Search</button>
          <button className="filter__reset">Reset</button>
        </div>
        <TypeMod openModal ={openModal}  />
      </section>
    </>
  );
}

export default Filter;
