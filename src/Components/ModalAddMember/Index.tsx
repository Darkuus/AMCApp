import React, {useState, useEffect} from 'react';

import { Content } from './styles';
import { FaTimes,FaUserPlus } from 'react-icons/fa';
import api from '../../Services/api';
import Modal from 'react-modal';
import { request } from 'https';

interface ModalProps {
    GroupID: string,
    isOpen: boolean
}

interface Member {
    _id: string,
    name: string,
    email: string,
    username: string
}
//Modal.setAppElement('#App')
const ModalAddMember:React.FC<ModalProps> = (props) => {
    
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [members, setMembers] = useState<Member[]>([]);
    const [memberSelected, setMemberSelected] = useState<Member>();

    useEffect(() => {
        setIsModalOpen(props.isOpen);
    }, [props.isOpen]);

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width                 :  '30%',
          height                :  '30vh',
        }
    };

    function handleCloseModal () {
        setIsModalOpen(false);
    }

    function handleAddMember () {
        const headers = {
            'Authorization': localStorage.getItem('auth')
        }

        const groupId = props.GroupID
        
        console.log("shienigan",memberSelected);

        if (!memberSelected)
            alert('Select a valid member.');
        else{
            const request = {
                groupId,
                memberSelected,
            }

            api.post<Member[]>(`Group/saveMember/`, request, {
                headers: headers
            })
            .then(response => {
                setMembers(response.data);
                console.log(members);
            });
        }
    }

    useEffect(() => {
        const headers = {
            'Authorization': localStorage.getItem('auth')
        }

        api.get<Member[]>(`Pessoa/getNonMembers/${props.GroupID}`, {
            headers: headers
        })
        .then(response => {
            setMembers(response.data);
        });
    },[{}]);

    return (
        <Content>
            <Modal
                isOpen={isModalOpen}
                style={customStyles}
            >
                <div>
                    <button onClick={handleCloseModal}>
                        <FaTimes />
                    </button> 
                    <span>Select one member to invite:</span>
                    <select name="" id="" onChange={(e) => {
                        members.map(x => {
                            if(x.username == e.target.value){
                                setMemberSelected(x);
                            }
                        });
                    }}>
                        <option value="" selected disabled hidden>Choose here</option>
                        {members.map(member => {
                            return(
                                <option>
                                    {member.username}
                                </option>
                            )
                        })}
                    </select>
                    <button onClick={handleAddMember}>
                        <FaUserPlus />
                        Add
                    </button> 
                </div>
                
            </Modal>
        </Content>
    )
}

export default ModalAddMember;