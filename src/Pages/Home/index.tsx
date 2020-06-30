import React, {useState, useEffect} from 'react';

import { useAuth } from '../../Context/auth';


import api from '../../Services/api';
import { Content } from './styles';
import { FaPlus, FaPlusSquare } from 'react-icons/fa';

//Components
import Header from '../../Components/Header/';
import GroupCard from '../../Components/GroupCard';

interface Group {
    administrator: Administrator,
    _id: string,
    title: string,
    revealDate: Date,
    minValue: Number,
    maxValue: Number,
    revealPlaceLatitude: Number,
    revealPlaceLongetude: Number,
    members: User[]
}

interface User{
    _id: string,
    username: string,
    name: string,
    email: string
    profilePic: string,
}

interface Administrator{
    username: string,
    name: string,
    email: string
}

const Home = () => {
    const [groupsExists, setGroupsExists] = useState<Boolean>(false);

    const { groups } = useAuth();

    console.log(groups);

    return(
        <Content>
            <div className="container">
                <div className="group-container">
                    <div className="group-container-header">
                        <h3>My Groups</h3>
                        <button>
                            <FaPlus />
                        </button>
                    </div>
                    <ul>
                        { 
                            groups?.map( group => {
                                return (
                                    <GroupCard
                                        _id={group._id}
                                        title={group.title} 
                                        revealDate={group.revealDate} 
                                        minValue={group.minValue} 
                                        maxValue={group.maxValue}
                                        count={2}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </Content>
    )
}

export default Home;