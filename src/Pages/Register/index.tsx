import React,{ useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import chompOne from '../../assets/img/chomp-ztower.png';
import chompTwo from '../../assets/img/chomp-2.png';
import moment from 'react-moment';


import api from '../../Services/api';

import { Content } from  './styles';

const Register = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birthdateInput, setBirthdateInput] = useState<string>('');
    const [birthdate, setBirthdate] = useState<Date>(new Date());
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const history = useHistory();

    async function handleRegister(e: FormEvent){
        e.preventDefault();
        try{
            
            let profilePic = 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg';
            const request = {
                name,
                birthdate,
                profilePic,
                email,
                username,
                password,
            }
            const response = await api.post('/Pessoa/save/', request);

            if (response.data.status == 0){
                alert(response.data.result.message);
                return;
            }

            history.push('/');
        }
        catch(err){
            return alert('Erro interno: ' + err);
        }
    }

    return (
        <Content>
            <div className="container">
                <img id="chompOne" src={chompOne} />
                <img id="chompTwo" src={chompTwo} />
                <div className="register-container">
                    <form onSubmit={handleRegister}>                            
                        <div className="div-subtitle">
                            <h4>1. Personal Data</h4>
                        </div>

                        <input type="text" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}} />

                        <input type="text" placeholder="Birthdate" value={birthdateInput} onChange={(e) => {setBirthdateInput(e.target.value)}} />

                        <div className="div-subtitle">
                            <h4>2. Contact</h4>
                        </div>

                        <input type="text"  placeholder="E-mail" value={email} onChange={(e) => {setEmail(e.target.value)}} />

                        <div className="div-subtitle">
                            <h4>3. Security</h4>
                        </div>

                        <input type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}} />

                        <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                        
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}  />

                        <div className="div-subtitle">
                            <h4>4. Almost There</h4>
                        </div>

                        <button className="button smooth-shadow w-50" type="submit" >Register</button>

                        <Link to="/">
                            <FaArrowLeft />
                            <span>Sign In!</span>
                        </Link>
                    </form>                    
                </div>
            </div>
        </Content>
    )
}

export default Register;