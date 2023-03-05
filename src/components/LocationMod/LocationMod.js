import { useState } from "react";
import "./LocationMod.scss";
function LocationMod({
  openModal,
  checkedLocation,
  setCheckedLocation,
}) {
  // const [filterValues, setFilterValues] = useState({
  //   BC: false,
  //   Manitoba: false,
  //   Saskatchewan: false,
  //   Brunswick: false,
  //   NWT: false,
  //   Yukon: false,
  //   PEI: false,
  //   Ontario: false,
  //   Nunavut: false,
  //   Quebec: false,
  //   Newfoundland: false,
  //   NS: false,
  // });
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setCheckedLocation((prevCheckedLocation) => ({
      ...prevCheckedLocation,
      [name]: checked,
    }));
  };
  if (!openModal) return null;
  return (
    <>
      <form className="location">
        <div className="location__wrapper">
          <span className="location__BC">
            British Columbia
            <label htmlFor="BC">
              <input
                type="checkbox"
                name="BC"
                id="BC"
                checked={checkedLocation.BC}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Manitoba">
            Manitoba
            <label htmlFor="Manitoba">
              <input
                type="checkbox"
                name="Manitoba"
                id="Manitoba"
                checked={checkedLocation.Manitoba}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Saskatchewan">
            Saskatchewan
            <label htmlFor="Saskatchewan">
              <input
                type="checkbox"
                name="Saskatchewan"
                id="Saskatchewan"
                checked={checkedLocation.Saskatchewan}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Brunswick">
            New Brunswick
            <label htmlFor="Brunswick">
              <input
                type="checkbox"
                name="Brunswick"
                id="Brunswick"
                checked={checkedLocation.Brunswick}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__NWT">
            Northwest Territories
            <label htmlFor="NWT">
              <input
                type="checkbox"
                name="NWT"
                id="NWT"
                checked={checkedLocation.NWT}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Yukon">
            Yukon
            <label htmlFor="Yukon">
              <input
                type="checkbox"
                name="Yukon"
                id="Yukon"
                checked={checkedLocation.Yukon}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__PEI">
            Prince Edward Island
            <label htmlFor="PEI">
              <input
                type="checkbox"
                name="PEI"
                id="PEI"
                checked={checkedLocation.PEI}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Ontario">
            Ontario
            <label htmlFor="Ontario">
              <input
                type="checkbox"
                name="Ontario"
                id="Ontario"
                checked={checkedLocation.Ontario}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Nunavut">
            Nunavut
            <label htmlFor="Nunavut">
              <input
                type="checkbox"
                name="Nunavut"
                id="Nunavut"
                checked={checkedLocation.Nunavut}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Quebec">
            Quebec
            <label htmlFor="Quebec">
              <input
                type="checkbox"
                name="Quebec"
                id="Quebec"
                checked={checkedLocation.Quebec}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__Newfoundland">
            Newfoundland
            <label htmlFor="Newfoundland">
              <input
                type="checkbox"
                name="Newfoundland"
                id="Newfoundland"
                checked={checkedLocation.Newfoundland}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="location__NS">
            Nova Scotia
            <label htmlFor="NS">
              <input
                type="checkbox"
                name="NS"
                id="NS"
                checked={checkedLocation.NS}
                onChange={handleInputChange}
              />
            </label>
          </span>
        </div>
      </form>
    </>
  );
}

export default LocationMod;
