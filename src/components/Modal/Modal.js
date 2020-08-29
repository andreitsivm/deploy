import React from "react";
import Portal from "../Portal/Portal";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "./../../redux/modal-reducer";
import "./Modal.scss"


const Modal =()=>{
    const modalIsOpen=useSelector(state=>state.modal.modalIsOpen)
    const message=useSelector(state=>state.modal.message)
    const dispatch=useDispatch()

    const lorem='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    return(
        <>
            {modalIsOpen&&
        <Portal>
        <div>
            <div className="modal__overlay" >
                <div className="modal__window" onBlur={()=>{dispatch(closeModal())}}>

                    <div className="modal__body"  >
                        <div className="modal__header">
                            <h1>Congratulations</h1>
                            <div className="modal-btn" onClick={()=>{dispatch(closeModal())}}>x</div>
                        </div>
                        <div className="modal__content">{message?<p>{message}</p>:lorem}</div>
                        <div className="modal__footer">
                            <Button className="small" onClick={()=>{dispatch(closeModal())}}>Great</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </Portal>}
            </>
    )
}


export default Modal