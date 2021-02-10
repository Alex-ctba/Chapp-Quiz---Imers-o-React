import React from 'react';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  return (
 
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
       <Head>
         <title>Chapp Quiz</title>
       </Head>
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
      <GitHubCorner projectUrl="https://github.com/Alex-ctba" />
    </QuizBackground>
  );
}
