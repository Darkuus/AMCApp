import styled from 'styled-components';

export const Content = styled.div`
    .logon-container{
        width: 40%;
        height: 60vh;
        border-radius: 5px;
        background-color: rgba(255, 255 , 255, 0.04);
        box-shadow: 3px 3px 1px #0000001f;
    }
    .logon-container form{
        width: 100%;
        height: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .logon-container form input{
        margin-bottom: 1rem;
    }
    .logon-container form button{
        background-color: #09FF00;
        font-size: 1.3rem;
        margin-top: .5rem;
        margin-bottom: 1rem;
    }
    .logon-container form a{
        display: flex;
        align-items: center;
        color: #FFF;
        text-decoration: none;
        transition: .4s;
    }
    .logon-container form a:hover{
        filter: brightness(70%);
    }
    .logon-container form svg{
        margin-right: .2rem;
    }
`;