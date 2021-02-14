import React from 'react'
import styled from 'styled-components'

//Css do componente
const InputBase = styled.input`
    width:100%;
    padding:15px;
    font-size:16px;
    border:1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme })=> theme.colors.constrastText};
    background-color:${({ theme }) => theme.colors.mainBg};
    border-radius:${({ theme }) => theme.borderRadius};
    outline:0;
    margin-bottom: 25px;
    font-family:'nunito';
    font-weight:bold;
    color:#ddd;
    text-transform:uppercase;
`;
//criando o componente
export default function Input({ onChange, placeholder }){
    return (
        <div>
           <InputBase 
          placeholder={placeholder}//recebe o placeholder para exibir na tela
           onChange={onChange}//recebe o evento de modificação 
           /> 
        </div>
    );
} 
