import styled from 'styled-components';

export const Content = styled.div`
    .register-container{
        width: 40%;
        height: 90vh;
        border-radius: 5px;
        background-color: rgba(255, 255 , 255, 0.04);
        box-shadow: 3px 3px 1px #0000001f;
        box-sizing: border-box;
        padding: 0 2em;
    }
    .register-container form{
        width: 100%;
        height: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .register-container form input{
        margin-bottom: 1rem
    }
    .register-container form button{
        background-color: #09FF00;
        font-size: 1.3rem;
        margin-top: .5rem;
        margin-bottom: 1rem;
        transition: .4s;
    }
    .register-container form a{
        display: flex;
        align-items: center;
        color: #FFF;
        text-decoration: none;
    }
    .register-container form a:hover{
        filter: brightness(70%);
    }
    .register-container form svg{
        margin-right: .2rem;
    }
`;