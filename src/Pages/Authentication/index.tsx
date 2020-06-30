import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FaSignInAlt} from 'react-icons/fa';
import api from '../../Services/api';

import chompOne from '../../assets/img/chomp-ztower.png';

import { Content } from  './styles';

const Logon = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const history = useHistory();

    async function handleLogin(e: FormEvent){
        e.preventDefault();
        try{
            const request = {
                username,
                password
            }
            const response = await api.post(`/Authentication/Login/`, request);
        
            if(response.data.status ===  0){
                 alert(response.data.result.message);          
                 return;
            }

            localStorage.setItem('auth', response.data.result.token);
            localStorage.setItem('username', response.data.result.username);
            
            history.push('/Home');
        }
        catch(err){
            console.log(err);
            alert('Erro interno:' + err);
        }
    } 

    return (
        <Content>
            <div className="container">
                <img id="chompOne" src={chompOne} />
                <section className="logon-container">
                    <form onSubmit={handleLogin}>
                        <input className="w-50 smooth-shadow" placeholder="User" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                        <input className="w-50 smooth-shadow" placeholder="Password" type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <button className="w-50 smooth-shadow button" type="submit">
                            Sign In
                        </button>
                        <Link to="/Register">
                            <FaSignInAlt />
                            <span>Sign Up</span>
                        </Link>
                    </form>
                    <div className="text-center mt-2">
                        <span>© 2020</span>
                    </div>
                </section>
            </div>
        </Content>
    )
}

export default Logon;