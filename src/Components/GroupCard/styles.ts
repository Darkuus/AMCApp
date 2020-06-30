import styled from 'styled-components';

export const Content = styled.div`
    .group-card{
        height: 8rem;
        align-items: center;
        justify-content: space-between;
    }
    .group-card h5 {
        font-size: 1.4rem;
    }
    .group-card .card-body {
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .group-card .group-values {
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }
`;