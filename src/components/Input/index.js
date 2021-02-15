import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//Css do componente
const InputBase = styled.input`
    width:100%;
    padding:15px;
    font-size:16px;
    border:1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme })=> theme.colors.white};
    background-color:${({ theme }) => theme.colors.wrong};
    border-radius:${({ theme }) => theme.borderRadius};
    outline:0;
    margin-bottom: 25px;
    font-family:'nunito';
    font-weight:bold;
    color:#fff;
    text-transform:uppercase;
`;
//criando o componente
export default function Input({ onChange, placeholder, ...props }){
    return (
        <div>
           <InputBase 
          placeholder={placeholder}//recebe o placeholder para exibir na tela
           onChange={onChange}//recebe o evento de modificação 
           {...props}
           /> 
        </div>
    );
} 

// Input.defaultProps = {
//     value ='',
// };

Input.propTypes ={
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
