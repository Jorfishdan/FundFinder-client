import { useState } from "react";
import './TypeMod.scss';

function TypeMod({openModal}) { 
    const [isShown, setIsShown] = useState(false);
    if (!openModal) return null;

    if(!openModal) {
        return null;
      } 
return (
    <>
    <div className="overlay">
    <section className="typemodal">
    {/* <div onClick={onClose} className="typemodal__close"> */}
        <span className="typemodal__scholarships">Scholarships</span>
        <span className="typemodal__grants">Grants</span>
        <span className="typemodal__bursary">Bursary</span>
        {/* </div> */}
    </section>
    </div>
    </>
)
}
export default TypeMod;