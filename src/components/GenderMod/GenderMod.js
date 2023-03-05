import { useState } from "react";

function GenderMod({ openModal, checkedGender, setCheckedGender }) {
  const handleInputChange = (event) => {
    const { name, checked } = event.target;
    setCheckedGender((prevCheckedGender) => ({
      ...prevCheckedGender,
      [name]: checked,
    }));
  };
  if (!openModal) return null;
  return (
    <>
      <form className="gender">
        <div className="gender__wrapper">
          <span className="gender__female">
            Female
            <label htmlFor="female">
              <input
                type="checkbox"
                name="female"
                id="female"
                checked={checkedGender.female}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="gender__LGBTQIA">
            LGBTQIA+
            <label htmlFor="LGBTQIA">
              <input
                type="checkbox"
                name="LGBTQIA"
                id="LGBTQIA"
                checked={checkedGender.LGBTQIA}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="gender__male">
            Male
            <label htmlFor="male">
              <input
                type="checkbox"
                name="male"
                id="male"
                checked={checkedGender.male}
                onChange={handleInputChange}
              />
            </label>
          </span>
          <span className="gender__other">
            Other
            <label htmlFor="other">
              <input
                type="checkbox"
                name="other"
                id="other"
                checked={checkedGender.other}
                onChange={handleInputChange}
              />
            </label>
          </span>
        </div>
      </form>
    </>
  );
}

export default GenderMod;
