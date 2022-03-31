import React from 'react';
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}>

    </div>
}

const ModalOverlays = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}


const Modal = (props) => {
    const portalElements = document.getElementById('overlays')
    return (
        <React.Fragment>
            {/* create portal dosen't know where to render the modal , there we required id */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElements)}
            {ReactDOM.createPortal(<ModalOverlays >{props.children}</ModalOverlays>, portalElements)}
        </React.Fragment>
    );
};


export default Modal;