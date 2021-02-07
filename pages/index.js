import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
 



// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
//   min-height:100vh;
// `;

export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding:15px;
  }
`;



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
     <QuizContainer>
       <Widget>
       <Widget.Header>
          <h1>Quiz Chapp vol. 1</h1>
           </Widget.Header>
         <Widget.Content>         
          <p>Divirta-se com seus colegas de trabalho!</p>
         </Widget.Content>        
       </Widget>
    

       <Widget> 
         <Widget.Header>
          <h1>O melhor Quiz para integrações</h1>
          </Widget.Header>
        <Widget.Content>         
          <p>Descrição...</p>
        </Widget.Content>
       </Widget>
       <Footer />
     </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/Alex-ctba"/>
    </QuizBackground>
  );
}
