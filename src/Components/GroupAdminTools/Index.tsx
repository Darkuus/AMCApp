import React, {useState} from 'react';
import { Content } from  './styles';
import ModalAddMember from '../../Components/ModalAddMember/Index';

import { FaUserPlus, FaCalendarAlt} from 'react-icons/fa';

interface GroupProps {
    _id: string
}

const GroupAdminTools:React.FC<GroupProps> = (props) => {

    const [showModalAddMember, setShowModalAddMember] = useState<boolean>(false);

    async function handleOpenModal (){
        setShowModalAddMember(true);
    }

    return (
        <Content className="admin-tools-container">
            <ModalAddMember GroupID={props._id} isOpen = {showModalAddMember} />
            <button className="btn-add-member" onClick={handleOpenModal}>
                <FaUserPlus />
                Add member
            </button>
            <button className="btn-choose-date">
                <FaCalendarAlt />
                Pick Reveal Date
            </button>
        </Content>
    )
}

export default GroupAdminTools;