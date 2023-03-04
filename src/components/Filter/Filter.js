import './Filter.scss';
import arrow from "../../assets/images/arrow2.png";
function Filter() {
return (<>
<section className="filter">
    <div className="filter__wrapper">
    <article className="filter__item">Type 
    <img src={arrow} alt="down arrow to open options" className="filter__arrow" />
    </article>
    <article className="filter__item">Location
    <img src={arrow} alt="down arrow to open options" className="filter__arrow" /></article>
    <article className="filter__item">Gender
    <img src={arrow} alt="down arrow to open options" className="filter__arrow" /></article>
    <article className="filter__item">Location
    <img src={arrow} alt="down arrow to open options" className="filter__arrow" /></article>
    <article className="filter__item">Date Posted
    <img src={arrow} alt="down arrow to open options" className="filter__arrow" /></article>
    <article className="filter__search">Search
    </article>
    <article className="filter__reset">Reset
    </article>
    </div>

</section>
</>)
}

export default Filter;