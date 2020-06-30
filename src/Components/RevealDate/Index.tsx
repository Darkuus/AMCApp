import React from 'react';

import { Content } from './styles';

interface RevealDate{
    date?: Date
}

const RevealDate: React.FC<RevealDate> = (props) => {
    
    let formatedDate: String;

    if(props.date)
         formatedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(Date.parse(props.date.toString()));
    else
        formatedDate = 'Reveal date hasn`t been decided yet.';

    return(
        <Content>
            <span className="formatedDate-badge">
                Reveal Date: {formatedDate}
            </span>
        </Content>
    )
}

export default RevealDate;