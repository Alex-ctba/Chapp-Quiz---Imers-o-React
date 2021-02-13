
import React from 'react';
import QuizBackground from '../src/components/QuizBackground'
import db from '../db.json'
import QuizContainer from '../src/components/QuizContainer'
import Head from 'next/head'
import Widget from '../src/components/Widget'
export default function QuizPage() {
  return (  
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Head>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
            <title>Quiz Chapp</title>
            </Head>

            <Widget>
              <Widget.Header>
                <h1>Bem vindo ao Chapp!</h1>
              </Widget.Header>
            </Widget>
        </QuizContainer>
      </QuizBackground>
  );
}
