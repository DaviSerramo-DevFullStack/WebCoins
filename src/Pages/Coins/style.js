import styled from "styled-components";

export const NavCoins = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
`

export const SearchBar = styled.div`
        margin: 1em 0;
        input{
                width: 200px;
                height: 50px;
                text-align: center;
                border: none;
                border-radius: 4px;
                font-size: 25px;
                background:  ${props => props.theme.colors.background} ;
                color: ${props => props.theme.colors.color};

        }
 

` 

export const Table = styled.div `
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 0.5em 0;
        border-bottom: 2px solid ${props => props.theme.colors.background};;
        width: 80%;

        .red{
                color:red;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right:80px ;
                width: 10%;
        }
        .green{
                color: #39ff14;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right:80px ;
                width: 10%;
        }
        @media (max-width: 850px){
                .red, .green{
                 margin-right:0;
                }
        }

        

`
export const CoinName = styled.div `
        img{
                margin:10px;    
        }

        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:80px ;
        width: 10%;
        
        @media (max-width: 850px){
                margin-right: 50px;
               .hide{
                display: none;
               }
        }
`
