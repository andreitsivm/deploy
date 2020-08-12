import React from "react";
import propTypes from 'prop-types'
import cn from 'classnames'
import "./Button.scss"



const Button=({className,children,onClick,disabled,active,...attrs})=>{

    const classes=cn(
        'btn',
        className,
        {active},

    )

    return(
        <button
            {...attrs}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >{children}</button>
    )
}
Button.propTypes={
children:propTypes.node,
    onClick:propTypes.func,
    className:propTypes.string,
    disabled:propTypes.bool,
    active:propTypes.bool
}
Button.defaultProps={
    children:'Default button',
    onClick:()=>{},
    className:'',
    disabled:false,
    active:false

}
export default Button