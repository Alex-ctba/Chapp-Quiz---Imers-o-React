import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  p{
    color:#ddd;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/Alex-ctba">
        <img src="" alt="Logo Chapp Quiz!"/>
      </a>
      <p>
        Aplicação desenvolvida com Next.js | React js | 
        {' '}
        
        {' '}
        <a href="https://www.linkedin.com/in/atnctba/">
          <span>Linkedin</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
