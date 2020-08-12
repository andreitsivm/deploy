import React from "react"
import cn from "classnames"
import './UploadForm.scss'


const UploadForm = ({fileName, inputRef, handleImageChange, errors,name}) => {
    const classes = cn(
        "input",
        {error: !!errors}
    )
    return (<>
        <label className="inputLabel">Photo</label>
        <div className={classes}>
            <div className="field">
            <div><span className="filename">{fileName}</span></div>
                <label htmlFor="upload"><div className={`browse ${!!errors&&"errored"}`}>Browse</div></label>
            </div>
                <input ref={inputRef}
                       id="upload"
                       onChange={handleImageChange}
                       name={name}
                       type="file"
                       accept="image"
                       formEncType="multipart/form-data"/>
        </div>
        <span className="inputError">{errors}</span></>

    )
}

export default UploadForm