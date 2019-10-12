import React from 'react';
import classNames from 'classnames';
import styles from './UserList.module.scss';
import UserMetadataTile from '../UserMetadataTile/UserMetadataTile'



const UserList =(props) => {
    console.log(props.usersList);
    return (
        <div>
            <UserMetadataTile name = {'Adrian'} surname = {'Podkalicki'} done={true}/>,
            <UserMetadataTile name = {'Adrian'} surname = {'Podkalicki'} done={true}/>  
        </div>
   
    )
    

};

export default UserList
