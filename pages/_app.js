import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';


const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
body{
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  font-family:'Lato', sans-serif;
  //deixa em branco no inicio
  color:${({ theme }) => theme.colors.constrastText};
}

html, body{
  min-height:100vh;
}
#_next{
  flex:1;
  display:flex;
  flex-direction:column;
}
`;

// trocando a config. abaixo pela config aqui que importei do db.json
const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
        
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
