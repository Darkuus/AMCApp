import React from 'react';

import { Link } from 'react-router-dom';
import { Content } from './styles';

import chompCard from '../../assets/img/chomp-card-01.png';
import RevealDate from '../RevealDate/Index';


// An interface that has just the necessary params to pass to GroupCard component.
interface GroupCardProps{
    _id: string,
    title: string,
    revealDate: Date,
    minValue: Number,
    maxValue: Number,
    count: Number
}

const GroupCard: React.FC<GroupCardProps> = (props) => {

    const date = new Date(props.revealDate);
    return (
        <Content>
            <li key={props._id} >
                <Link to= {`/group/${props._id}`} className="group-card">
                    <h5>{props.title}</h5>
                    <div className="card-body">
                        <span><b>{props.count} </b>Members</span>
                        <div className="group-values">
                            <span>Min value: R${props.minValue}</span>
                            <span>Max value: R${props.maxValue}</span>
                        </div>
                    </div>
                    <RevealDate date={props.revealDate} />
                    <img src={chompCard} alt="chomp-card"/>
                </Link>
            </li>    
        </Content>
    )
}

export default GroupCard;