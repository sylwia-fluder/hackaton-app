import React from 'react';
import Main from '../components/UsersList/UserList';

const Home = () => {
    const userList= [{username:'Adrian',surname:'Podkalicki',done:true},{username:'MArcin',surname:'Kowalski',done:false}]
    return (
        <div>
            Home Page
           <Main usersList = {userList}/>
        </div>
    );
};

export default Home;