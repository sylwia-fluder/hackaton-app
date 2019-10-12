import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCheck,faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './UserMetadata.module.scss';

 export default class UserMetadataTile extends React.Component {
    
     render(){
        const personIcon = <FontAwesomeIcon icon={faUserCircle} size = {'6x'} />
        const approve = <FontAwesomeIcon icon={faCheck} size = {'3x'} />
        const addFeadback = <FontAwesomeIcon icon={faPlusCircle} size = {'3x'} />
        const icon = this.props.done ? approve : addFeadback;
        const clasNameIconFeebackAdd = classNames( styles.feedback_iconn, styles.icon_add);
        const clasNameIconFeebackAprove = classNames( styles.feedback_iconn, styles.icon_approve);
        const clasNameIconFeeback = this.props.done ? clasNameIconFeebackAprove : clasNameIconFeebackAdd;
        return (
            <div>
                <div className={styles.content_box}>
                    <div className={classNames(styles.content, styles.person_icon_box)}>
                        {personIcon}
                    </div>
                    <div className={classNames(styles.content, styles.metadata_box)}>
                        <p className={classNames(styles.metadata, styles.name)}>{this.props.name}</p>
                        <p className={classNames(styles.metadata, styles.surname)}>{this.props.surname} </p>
                    </div>
                    <div className = {clasNameIconFeeback} >{icon}</div>
                </div>
            </div>
        )  
        }
 };
  UserMetadataTile.propTypes = {
    done: propTypes.bool,
    name:propTypes.string,
    surname:propTypes.string
  }

// export default UserMetadataTile