import React, {useState} from "react";
import propTypes from 'prop-types'
import cn from 'classnames'
import './Tooltip.scss'



const Tooltip=({children,style,position})=>{

    const [visible,setVisible]=useState(false)
    const [content,setContent]=useState(null)

    const show=(e)=>{
        setVisible(true)
        setContent(children.props.content)
    }
    const hide =()=>{
        setVisible(false)
        setContent(null)
    }
    const classes=cn(
        'tooltip',
        position
    )
    return(
        <span className="tooltipWrapper">
            {visible&&<span style={style} className={classes}>{content}</span>}
             <span className="targetElement"
             onMouseEnter={show}
             onMouseLeave={hide}>{children}</span>
        </span>
    )
}
Tooltip.propTypes={
    children:propTypes.node.isRequired,
    content:propTypes.string,
    position:propTypes.oneOf(['top','left','right','bottom'])


}
Tooltip.defaultProps={
    content:'Tooltip content',
    style:{},
    position:'top'
}

export  default Tooltip