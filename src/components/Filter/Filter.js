import arrow from "../../assets/images/arrow2.png";
function Filter() {
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
      </section>
    </>
  );
}

export default Filter;
