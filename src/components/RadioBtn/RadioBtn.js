import React from "react";

import "./Radio.scss"


const RadioBtn = ({positions,inputRef,formChangeHandler,name,errors}) => {
    return (
        <div className="radio">
            <label className={`inputLabel radio_label`}>Select your position</label>
            <div>
            {positions.map((position, index) => {
                return (
                    <div key={index} className="radio_btn">
                        <input className="custom-radio"
                            ref={inputRef} type="radio"
                                onChange={formChangeHandler}
                                name={name}
                                value={position.id}/>
                        <label className="label" id="radio-btn" htmlFor={positions.id}>{position.name}</label>
                    </div>)
            })}
                <span className="inputError">{errors}</span></div>


        </div>
    )
}
export default RadioBtn