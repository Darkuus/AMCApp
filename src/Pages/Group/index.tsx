import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Services/api';

import { Content } from  './styles';
import chompOne from '../../assets/img/chomp-ztower.png';
import chompTwo from '../../assets/img/chomp-2.png';

import RevealDate from '../../Components/RevealDate/Index';
import MemberCard from '../../Components/MemberCard/Index';
import GroupAdminTools from '../../Components/GroupAdminTools/Index';

interface Group {
    _id: string,
    administrator: {
        name: string,
        username: string,
        email: string
    },
    title: string,
    revealDate: Date,
    minValue: number,
    maxValue: number,
    revealPlaceLatitude: number,
    revealPlaceLongetude: number,
    members: {
        _id: string,
        name: string,
        username: string,
        email: string,
        profilePic: string
    }[]
}

const GroupCard = () => {
    const { id } = useParams();

    //States
    const [group, setGroup] = useState<Group>();
    const [isAdmin, setIsAdmin] = useState<Boolean>(false);

    const headers = {
        'Authorization': localStorage.getItem('auth')
    }
    //Load data
    useEffect(() => {
        api.get<Group>(`/Group/getOne/${id}`, {
            headers: headers
        }).then(response => {
            setGroup(response.data);
            
            if(group?.administrator.username == localStorage.getItem('username')){
                setIsAdmin(true);
            }
        });
    }, [{}]);

    return (
        <Content>
            <div className="container">
                <img id="chompTwo" src={chompTwo} />
                <section className="group-description">
                    <div className="description-header">
                        <h2>{group?.title}</h2>
                        <RevealDate date={group?.revealDate}/>
                    </div>
                    <span>N. Participants: {group?.members.length}</span>
                    <div className="group-values">
                        <span>Min value: R${group?.minValue}</span>
                        <span>Max value: R${group?.maxValue}</span>
                    </div>
                </section>

                { <GroupAdminTools _id={id} /> }

                <section className="group-members">
                    <ul className="members">
                        {group?.members.map( member => {
                                return(
                                    <li>
                                        <MemberCard 
                                            name = {member.name}
                                            username = {member.username}
                                            email = {member.email}
                                            profilePic = {member.profilePic}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        </Content>
    )
}

export default GroupCard;