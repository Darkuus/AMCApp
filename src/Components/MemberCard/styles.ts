import styled from 'styled-components';

export const Content = styled.div `
    .member-card {
        height: 5rem;
        display: flex;
        align-items: center;
        padding:.25rem;
        background-color: #fff;
        border-radius: 5px;
    }
    .member-card img {
        width: 5em;
        height: 5em;
        border: 2px solid #000;
        border-radius: 5px;
    }
    .card-info {
        display:flex;
        flex-direction: column;
    }
`;