import React from "react";
import cn from "classnames"

import "./Radio.scss"


const RadioBtn = ({positions, inputRef, formChangeHandler, name, errors}) => {

    const classes = cn(
        "inputLabel",
        "radio_label",
    )
    return (<>
            <div className="radio">
                <label className={classes}>Select your position</label>
                <div className={`radio-container ${!!errors && "error"}`}>
                    {positions.map((position, index) => {
                        return (
                            <div key={index} className="radio_btn">
                                <input className="custom-radio"
                                       ref={inputRef} type="radio"
                                       onChange={formChangeHandler}
                                       name={name}
                                       value={position.id}/>
                                <label className="radio-item__label" id="radio-btn"
                                       htmlFor={positions.id}>{position.name}</label>
                            </div>)
                    })}

                </div>
            </div>
            <span className="inputError">{errors}</span></>
    )
}
export default RadioBtn