import React from 'react';
import Main from '../components/UsersList/UserList';

const Home = () => {
    const userList= [{name:'Adrian',name:'Podkalicki',done:true},{username:'MArcin',name:'Kowalski',done:false}]
    return (
        <div>
            Home Page
           <Main usersList = {userList}/>
        </div>
    );
};

export default Home;