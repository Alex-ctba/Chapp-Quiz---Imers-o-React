import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('Retorno do estado do Componente aqui ==> ', name);
  return ( 
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
       <Head>  
       <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
         <title> Quiz Chapp</title>          
       </Head>
        <Widget>
          <Widget.Header>
            <h1>Quiz Chapp vol. 1</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(event){
              event.preventDefault();                    
             router.push(`/quiz?name=${name}`) //Resgatando nome pelo queryparams
              console.log('fazendo uma submissão aqui')

              //configurar aqui o router para enviar a outra pagina...
            }} >
             
           <Input onChange={function(event){
            //  name = event.target.value
            //  console.log(name)
            setName(event.target.value)//setName pega o valor do input e passa para o componente renderizando-o. 
            }}
            placeholder="Seu nome para iniciarmos!" 
            />  
                        
            <button type="submit" disabled={name.length === 0}>Jogar</button> {/*desabilitando button jogar se variavel 
            nome estiver vazia*/} 
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h2>Bem vindo!</h2>          
          </Widget.Header>
          <Widget.Content>
          <p>O melhor Quiz para integrações no ambiente de trabalho, Vamos começar?</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Alex-ctba" />
    </QuizBackground>
  );
}
