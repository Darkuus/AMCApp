import React from 'react';

import { Content } from './styles';

interface MemberCard {
    name: string,
    username: string,
    email: string,
    profilePic: string
}

const MemberCard:React.FC<MemberCard> = (props) => {
    return (
        <Content>
            <div className="member-card smooth-shadow">
                <img src={props.profilePic} alt="Profile Pic"/>
                <div className="card-info">
                    <h5>{props.name}</h5>
                    <span>{props.email}</span>
                </div>
            </div>
        </Content>
    )
}

export default MemberCard;