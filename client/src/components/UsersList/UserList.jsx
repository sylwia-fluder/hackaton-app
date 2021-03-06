import React from 'react';
import styles from './UserList.module.scss';
import UserMetadataTile from '../UserMetadataTile';

const UserList = (props) => {
    return (
        <div className = {styles.content_list}>
           {
               props.usersList.map((user => 
                <div className = {styles.user__metadata}>
                    <UserMetadataTile 
                name = {user['name']} 
                surname = {user['name']} 
                done={true}/>
                 </div>
           ))}
        </div>
    )
};

export default UserList
