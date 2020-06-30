import styled from 'styled-components';

export const Content = styled.div`
    .container{
        flex-direction: column;
        padding-top: 1rem;
    }
    .group-description {
        width: 60%;
        height: 30vh;        
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;
        background-color: rgba(255, 255 , 255, 0.04);
        box-shadow: 3px 3px 1px #0000001f;
    }
    .description-header {
        text-align: center;
    }
    .description-header h2 {
        font-size: 2.5rem;
        margin-bottom: .4rem;
    }
    .group-members {
        width: 60%;
        height: 60vh;
        border-radius: 5px;
        background-color: rgba(255, 255 , 255, 0.04);
        box-shadow: 3px 3px 1px #0000001f;
    }
    .members {
        display: grid;
        grid-template-columns: auto auto auto;
        padding: .5rem;
    }
    .members li:first-child .member-card{
        background-color: #C6FFF9 !important;
    }
    .group-values {
        width: 45%;
        display: flex;
        align-items: baseline;
        justify-content: center;
        margin-bottom: 1rem;
    }
    .group-values span{
        padding: .15rem;
        border-radius: 12px;
    }    
    .group-values span:first-child{
        background-color: #e75454;
        margin-right: .3rem;
    }
    .group-values span:last-child{
        background-color: #5f5fd0;
        margin-left: .3rem;
    }
    

}
`;