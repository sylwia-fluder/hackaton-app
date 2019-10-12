import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCheck,faPlusCircle } from '@fortawesome/free-solid-svg-icons'


import "./userMetadata.scss";


 const userMetadataTile = (props) => {
    

    const personIcon = <FontAwesomeIcon icon={faUserCircle} size = {'3x'} />
    const approve = <FontAwesomeIcon icon={faCheck} size = {'2x'} />
    const addfeadback = <FontAwesomeIcon icon={faPlusCircle} size = {'2x'} />
    const icon= props.done ? approve : addfeadback 
    return ( 
    <div>
        <div className = "content-box" >
            <div className = "content person-icon-box">
                 {personIcon}
            </div>
            <div className = "content metadata-box">
                <p className = "metadata name ">{props.name}</p>
                <p className = "metadata surname">{props.surname} </p>
            </div>
            <div className = "metadata">{icon}</div>
       
        </div></div>
    )
}

export default userMetadataTile