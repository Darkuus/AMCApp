import styled from 'styled-components';

export const Content = styled.div`
    width: 60%;
    height: 20vh;
    margin-bottom: 1rem;
    padding: .7rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: #c6fff94a;
    box-shadow: 3px 3px 1px #0000001f;

    button {
        padding: .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-style: none;
        border-radius: 5px;
        color: #fff;
        font-size: 1.2rem;
        transition: .3s;
        cursor: pointer;
    }
    button svg {
        font-size: 1.7rem;
        margin-right: .2rem;
    }
    .btn-add-member {
        margin-right: .5rem;
        background-color: #3eb034;
    }
    .btn-add-member: hover {
        background-color: #53db47;
    }
    .btn-choose-date {
        margin-left: .5rem;
        background-color: #3dc5d3;
    }
    .btn-choose-date: hover {
        background-color: #58d8e5;
    }
`;