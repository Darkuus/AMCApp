import React, {useState, useEffect} from 'react';

import api from '../../Services/api';

import { Content } from './styles';
import { FaUser } from 'react-icons/fa';

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
    const [user, setUser] = useState<User>();
    
    useEffect(() => {

        const headers = {
            'Authorization': localStorage.getItem('auth')
        }

        api.get(`Pessoa/GetOneByUsername?username=${localStorage.getItem('username')}`,{
            headers: headers
        }).then(result => {
            setUser(result.data);
        }).catch(err => {
            alert('Internal Error: ' + err)
        });
    }, [{}]);

    return (
        <Content>
            <header className="header-container">
                <div className="logo-container">
                    Logo
                </div>
                <div>
                    <h1>Amigo Chocolate</h1>
                </div>
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