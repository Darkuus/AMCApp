import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @font-face {
        font-family: WillieWonka;
        src: url(./assets//font//WillyWonka.ttf);
    }
    html *{
        font-family: Arial Rounded MT,Arial, Helvetica, sans-serif;    
    }
    body,h1,h2,h3,h4,h5,ul{
        margin:0;
    }
    ul{
        list-style: none;
        padding: 0;
    }
    form input{
        background-color: #FFF;
        height: 2.5rem;
        border: 0;
        border-radius: 4px;
        box-sizing: border-box;
        padding-left: .5em;
    }
    input{
        width: 100%;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding: 0 1rem;
        background-color:#724a36;
    }
    .container #chompOne{
        position: fixed;
        top: 0em;
        right: 0;
        width: 21%;
    }
    .container #chompTwo{
        position: fixed;
        bottom: 0em;
        left: 0;
        width: 12%
    }
    .button{
        height: 2.5rem;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
        transition: .4s;
    }
    .button:hover{
        filter: brightness(80%);
    }



    /*  Utilities Classes  */
    .w-50{
        width: 50% !important;
    }
    .mr-1{
        margin-right: .25rem;
    }
    .mr-2{
        margin-right: .5rem;
    }
    .mt-1{
        margin-top: .25rem;
    }
    .mt-2{
        margin-top: .5rem;
    }
    .smooth-shadow{
        box-shadow: 2px 2px #0000002b;
    }
    .div-subtitle{
        width: 100%;
        padding-bottom: .2rem;
        margin-bottom: .5rem;
        color: #C6FFF9;
        border-bottom: 4px solid #C6FFF9;
    }
    .text-center {
        text-align: center !important; 
    }
`;