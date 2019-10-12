import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCheck,faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import style from "./userMetadata.scss";


 const userMetadataTile = (props) => {
    const personIcon = <FontAwesomeIcon icon={faUserCircle} size = {'6x'} />
    const approve = <FontAwesomeIcon icon={faCheck} size = {'3x'} />
    const addfeadback = <FontAwesomeIcon icon={faPlusCircle} size = {'3x'} />
    const icon = props.done ? approve : addfeadback 
    // const clasNameIconFeeback = style.content,styl.feedback_iconn
    // const className = props.done ? {style.content, style.feedback_iconn, icon_approve} : "content feedback-iconn icon-add"
    return ( 
        
    <div>
        <div className = {style.content_box} >
             <div className = {style.content, style.person_icon_box}>
                 {personIcon}
            </div>
            <div className = {style.content, style.metadata_box}>
                <p className = {style.metadata, style.name}>{props.name}</p>
            <p className = {style.metadata, style.surname}>{props.surname} </p>
            </div>
            {/* <div className = {className} >{icon}</div> */}
       
        </div>
    </div>
    )
}

export default userMetadataTile