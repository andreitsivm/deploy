import React from "react";

import style from "./Radio.module.scss"


const RadioBtn = ({positions,inputRef,formChangeHandler,name,errors}) => {
    return (
        <div className={style.radio}>
            <label className={`inputLabel ${style.radio_label}`}>Select your position</label>
            <div>
            {positions.map((position, index) => {
                return (
                    <div key={index} className={style.radio__btn}>
                        <input  ref={inputRef} type="radio"
                                onChange={formChangeHandler}
                                name={name}
                                value={position.id}/>
                        <label className={style.label} id="radio-btn" htmlFor={positions.id}>{position.name}</label>
                    </div>)
            })}
                <span className="inputError">{errors}</span></div>


        </div>
    )
}
export default RadioBtn