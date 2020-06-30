import styled from 'styled-components';

export const Content = styled.div`
    .header-container{
        width: 100%;
        height: 3rem;
        box-sizing: border-box;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #C6FFF9;
    }
    .profile-container{
        display: flex;
        align-items: center;
    }
    .profile-container span{
        background: #006E8A;
        border-radius: 5px;
        padding: .2rem;
        color: #fff;
    }
    .user-icon{
        display: inline-block;
        border-radius: 100%;
        padding: .4rem;
    }
    .user-icon img{
        width: 40px;
        height: 40px;
        border: 2.2px solid #006E8A;
        border-radius: 50%;
    }
`;