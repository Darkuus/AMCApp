import styled from 'styled-components';

export const Content = styled.div`    
    .container{
        flex-direction: column;
    }
    .group-container{
        width: 60%;
    }
    .group-container h3{
        font-size: 1.7rem;
        margin-bottom: .4rem;
    }
    .group-container ul {
        height: 60vh;
        padding: .6rem ;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 24px;
        background-color: rgba(255, 255 , 255, 0.04);
        box-shadow: 3px 3px 1px #0000001f;
        border-radius: 5px;
    }
    .group-container-header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .group-container-header button{
        height: 1.6rem;
        width: 1.6rem;
        margin-left: .5rem;
        display: flex;
        align-items: center;
        background-color: #6cfb62;
        cursor: pointer;
        border-radius: 3px;
        border-style: none;
        transition: .3s;
    }
    .group-container-header button:hover{
        background-color: #C6FFF9;
    }
    .group-card{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        position: relative;
        background: #C6FFF9;
        border-radius: 5px;
    }
    .group-card img{
        width: 20%;
        position: absolute;
        right: 0;
        bottom: 0;
    }
`;