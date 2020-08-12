import React from "react";
import cn from "classnames"
import propTypes from "prop-types"
import "./Input.scss"


const Input = ({id,name,className,label,error,inputRef,errors,...attrs}) => {

    const classes = cn(
        className,
        'input',
        {error:!!errors},

    )

    return (
            <div className="inputWrapper">
                {label&&<label className="inputLabel" htmlFor={id}>{label}</label>}
                <input
                    name={name}
                    id={id}
                    ref={inputRef}
                    className={classes}
                    {...attrs}/>
                {errors&&<span className="inputError">{errors}</span>}
            </div>
    )
}
Input.propTypes = {
    id:propTypes.string.isRequired,
    className:propTypes.string,
    label:propTypes.string,
    errors:propTypes.string
}
Input.defaultProps = {
    className:'',
    label:'',
    errors:''
}
export default Input