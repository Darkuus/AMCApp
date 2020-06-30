import React, {useState, useEffect} from 'react';

import api from '../../Services/api';
import { useAuth } from '../../Context/auth';

import { Content } from './styles';
import { FaSignOutAlt } from 'react-icons/fa';

interface User {
    _id: string,
    name: string,
    birthday: Date,
    profilePic: string,
    email: string,
    username: string,
    wishList:string[]
}

const Header:React.FC<any> = () => {
    
    const { signOut, user } = useAuth();

    function handleSignOut() {
        signOut();  
    }

    return (
        <Content>
            <header className="header-container">

                <FaSignOutAlt onClick={handleSignOut}/>
                <h1>Amigo Chocolate</h1>
                <div className="profile-container">
                    <span className="mr-1">{user?.name}</span>
                    <a className="user-icon">
                        <img src={user?.profilePic} alt="Profile Pic"/>
                    </a>
                </div>
            </header>
        </Content>
    )
}

export default Header;