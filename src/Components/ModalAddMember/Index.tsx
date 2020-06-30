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
    _id: string;
    name: string;
    email: string;
    username: string;
    profilePic:string;
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
        const groupId = props.GroupID
        
        if (!memberSelected)
            alert('Select a valid member.');
        else{
            const request = {
                groupId,
                memberSelected,
            }

            request.memberSelected.profilePic = '';

            api.post<Member[]>(`Group/saveMember/`, request)
            .then(response => {
                setMembers(response.data);
                console.log(members);
            });
        }
    }

    useEffect(() => {
        api.get<Member[]>(`Pessoa/getNonMembers/${props.GroupID}`)
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
                <div style={{
                    textAlign: 'center',
                }}>
                    <button onClick={handleCloseModal} style={{
                        backgroundColor: '#fff',
                        borderStyle: 'none',
                        color: '#999',
                        float: 'right',
                        cursor: 'pointer'
                    }}>
                        <FaTimes />
                    </button> 
                </div>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <span style={{marginBottom: '4rem'}}>Select one member to invite:</span>
                        
                    <select name="" id="" onChange={(e) => {
                        members.map(x => {
                            if(x.username == e.target.value){
                                setMemberSelected(x);
                            }
                        });
                    }} style={{marginBottom: '2rem'}}>
                        <option value="" selected disabled hidden>Choose here</option>
                        {
                            members.map(member => {
                                return(
                                    <option>
                                        {member.username}
                                    </option>
                                )                                
                            })}
                    </select>
                    <button onClick={handleAddMember} style={{backgroundColor: '#53db47', 
                        width: '50%',
                        padding: '.5rem 1rem',
                        borderRadius: '5px', 
                        borderStyle: 'none',
                        cursor: 'pointer'
                    }}>
                        <FaUserPlus />
                        Add
                    </button> 
                </div>
            </Modal>
        </Content>
    )
}
export default ModalAddMember;