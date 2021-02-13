import React from 'react'
import styled from 'styled-components'

//Criando componente input e seu Css
const InputBase = styled.input`
    width:100%;
    padding:15px;
    border:1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme })=> theme.colors.constrastText};
    background-color:${({ theme }) => theme.colors.mainBg};
    border-radius:${({ theme }) => theme.borderRadius};
    outline:0;
    margin-bottom: 25px;
    color:#ddd;
    font-size:1em;
    font-weight:bold;
    font-family:'Nunito', sans-serif;
    text-transform:uppercase;
`;
 
//criando o componente
export default function Input({ onChange }){
    return (
        <div>
           <InputBase onChange={onChange} />
        </div>
    );
} 